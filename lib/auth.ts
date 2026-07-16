import { supabase } from "@/lib/supabase/client";

const ADMIN_SESSION_KEY = "wizzy-admin-session";

export interface AdminSession {
  email: string;
  mode: "supabase" | "fallback";
  authenticatedAt: string;
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const rawSession = window.localStorage.getItem(ADMIN_SESSION_KEY);
    if (!rawSession) return false;

    const session = JSON.parse(rawSession) as AdminSession;
    return Boolean(session?.email);
  } catch {
    return false;
  }
}

export function saveAdminSession(email: string, mode: AdminSession["mode"] = "fallback") {
  if (typeof window === "undefined") return;

  const session: AdminSession = {
    email: email.trim().toLowerCase(),
    mode,
    authenticatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(ADMIN_SESSION_KEY);
}

export async function signInAdmin(email: string, password: string) {
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  if (!trimmedEmail || !trimmedPassword) {
    return { ok: false, message: "Please enter your email and password." };
  }

  const configuredEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase();
  const configuredPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (configuredEmail && configuredPassword) {
    if (trimmedEmail === configuredEmail && trimmedPassword === configuredPassword) {
      saveAdminSession(trimmedEmail, "fallback");
      return { ok: true, message: "Signed in successfully." };
    }

    return { ok: false, message: "Invalid email or password." };
  }

  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (hasSupabaseConfig) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (!error && data.session) {
        saveAdminSession(trimmedEmail, "supabase");
        return { ok: true, message: "Signed in successfully." };
      }

      return { ok: false, message: error?.message ?? "Invalid email or password." };
    } catch {
      return { ok: false, message: "Unable to connect to authentication service." };
    }
  }

  saveAdminSession(trimmedEmail, "fallback");
  return { ok: true, message: "Signed in successfully in demo mode." };
}
