import { useEffect, useState, useCallback } from "react";

const USER_KEY = "eudst_demo_user";
const ENROLL_KEY = "eudst_demo_enrollments";
const EVENT = "demo-auth-changed";

export type DemoUser = {
  name: string;
  email: string;
  createdAt: string;
};

const readUser = (): DemoUser | null => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    return null;
  }
};

const readEnrollments = (): string[] => {
  try {
    const raw = localStorage.getItem(ENROLL_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const emit = () => window.dispatchEvent(new Event(EVENT));

export const useDemoAuth = () => {
  const [user, setUser] = useState<DemoUser | null>(() => readUser());

  useEffect(() => {
    const sync = () => setUser(readUser());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const signUp = useCallback((name: string, email: string) => {
    const u: DemoUser = { name, email, createdAt: new Date().toISOString() };
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    emit();
    return u;
  }, []);

  const signIn = useCallback((email: string) => {
    const existing = readUser();
    const name =
      existing?.email === email && existing.name
        ? existing.name
        : email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const u: DemoUser = { name, email, createdAt: existing?.createdAt ?? new Date().toISOString() };
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    emit();
    return u;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(USER_KEY);
    emit();
  }, []);

  return { user, signUp, signIn, signOut };
};

export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<string[]>(() => readEnrollments());

  useEffect(() => {
    const sync = () => setEnrollments(readEnrollments());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const enroll = useCallback((code: string) => {
    const list = readEnrollments();
    if (!list.includes(code)) {
      list.push(code);
      localStorage.setItem(ENROLL_KEY, JSON.stringify(list));
      emit();
    }
  }, []);

  const isEnrolled = useCallback(
    (code: string) => enrollments.includes(code),
    [enrollments]
  );

  return { enrollments, enroll, isEnrolled };
};
