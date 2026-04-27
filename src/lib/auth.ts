import { useCallback, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string | null;
};

const buildUser = (
  user: User | null,
  profile?: { full_name?: string | null; avatar_url?: string | null } | null,
): AuthUser | null => {
  if (!user) return null;
  const meta = (user.user_metadata ?? {}) as {
    full_name?: string;
    name?: string;
    avatar_url?: string;
  };
  const fallbackName =
    profile?.full_name ||
    meta.full_name ||
    meta.name ||
    (user.email ? user.email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Learner");
  return {
    id: user.id,
    email: user.email ?? "",
    name: fallbackName,
    avatarUrl: profile?.avatar_url ?? meta.avatar_url ?? null,
  };
};

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Listen first (sync only inside callback)
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(buildUser(newSession?.user ?? null));
      // Defer profile fetch so we never call other Supabase APIs inside the callback
      if (newSession?.user) {
        setTimeout(() => {
          supabase
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", newSession.user.id)
            .maybeSingle()
            .then(({ data }) => {
              setUser(buildUser(newSession.user, data));
            });
        }, 0);
      }
    });

    // 2. Then read existing session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(buildUser(data.session?.user ?? null));
      setLoading(false);
      if (data.session?.user) {
        supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", data.session.user.id)
          .maybeSingle()
          .then(({ data: profile }) => {
            setUser(buildUser(data.session!.user, profile));
          });
      }
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      const redirectUrl = `${window.location.origin}/`;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: { full_name: name },
        },
      });
      if (error) return { error };
      return { user: data.user };
    },
    [],
  );

  const signIn = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error };
    return { user: data.user };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const { error } = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/`,
    });
    if (error) return { error };
    return {};
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { user, session, loading, signUp, signIn, signInWithGoogle, signOut };
};

export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user.id;
    if (!userId) {
      setEnrollments([]);
      setLoading(false);
      return;
    }
    const { data } = await supabase
      .from("enrollments")
      .select("course_code")
      .eq("user_id", userId);
    setEnrollments(data?.map((r) => r.course_code) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      refresh();
    });
    return () => sub.subscription.unsubscribe();
  }, [refresh]);

  const enroll = useCallback(
    async (code: string) => {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;
      if (!userId) return { error: new Error("Not signed in") };
      const { error } = await supabase
        .from("enrollments")
        .insert({ user_id: userId, course_code: code });
      if (error && !error.message.includes("duplicate")) return { error };
      await refresh();
      return {};
    },
    [refresh],
  );

  const isEnrolled = useCallback(
    (code: string) => enrollments.includes(code),
    [enrollments],
  );

  return { enrollments, enroll, isEnrolled, loading };
};
