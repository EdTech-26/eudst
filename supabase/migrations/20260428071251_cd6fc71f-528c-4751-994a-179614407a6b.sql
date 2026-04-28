-- 1. Role enum
CREATE TYPE public.app_role AS ENUM ('faculty', 'learner', 'admin');

-- 2. user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Users can view their own roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- No INSERT/UPDATE/DELETE policies for clients: only the SECURITY DEFINER trigger may write.

-- 3. Security definer role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. Extend handle_new_user to also assign roles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _signup_source TEXT;
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data ->> 'full_name',
      NEW.raw_user_meta_data ->> 'name',
      split_part(NEW.email, '@', 1)
    ),
    NEW.raw_user_meta_data ->> 'avatar_url'
  );

  -- Every account is a learner by default
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'learner')
  ON CONFLICT (user_id, role) DO NOTHING;

  -- Faculty role granted only when signup originated from the faculty page
  -- AND the email is on the UDST domain
  _signup_source := NEW.raw_user_meta_data ->> 'signup_source';
  IF _signup_source = 'faculty'
     AND lower(NEW.email) LIKE '%@udst.edu.qa' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'faculty')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- 5. Make sure the trigger exists on auth.users (idempotent)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();