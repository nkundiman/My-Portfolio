import { supabaseServer } from "@/lib/supabase/server";
import type { Project } from "@/app/type/project";

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabaseServer
    .from("projects")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data as Project[]) || [];
}

export async function getProject(slug: string): Promise<Project | null> {
  const { data, error } = await supabaseServer
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;

  return data as Project | null;
}
