'use server';

import { revalidatePath } from "next/cache";
import { supabaseServer } from "@/lib/supabase/server";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toNumber(value: FormDataEntryValue | null, fallback = 0) {
  const raw = String(value ?? "").trim();
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export async function createProject(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(title);
  const shortDescription = String(formData.get("short_description") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const imageUrl = String(formData.get("image_url") ?? "").trim();
  const videoUrl = String(formData.get("video_url") ?? "").trim();
  const status = String(formData.get("status") ?? "draft").trim() || "draft";
  const featured = formData.get("featured") === "on";

  const payload = {
    title,
    slug,
    short_description: shortDescription,
    description,
    category,
    goal: toNumber(formData.get("goal")),
    raised: toNumber(formData.get("raised")),
    location,
    image_url: imageUrl,
    video_url: videoUrl,
    featured,
    status,
    created_at: new Date().toISOString(),
  };

  const { error } = await supabaseServer.from("projects").insert(payload);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
  revalidatePath("/sponsorship");
}

export async function updateProject(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Missing project id");

  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim() || slugify(title);
  const shortDescription = String(formData.get("short_description") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const imageUrl = String(formData.get("image_url") ?? "").trim();
  const videoUrl = String(formData.get("video_url") ?? "").trim();
  const status = String(formData.get("status") ?? "draft").trim() || "draft";
  const featured = formData.get("featured") === "on";

  const payload = {
    title,
    slug,
    short_description: shortDescription,
    description,
    category,
    goal: toNumber(formData.get("goal")),
    raised: toNumber(formData.get("raised")),
    location,
    image_url: imageUrl,
    video_url: videoUrl,
    featured,
    status,
  };

  const { error } = await supabaseServer.from("projects").update(payload).eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
  revalidatePath("/sponsorship");
}

export async function deleteProject(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Missing project id");

  const { error } = await supabaseServer.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
  revalidatePath("/sponsorship");
}

export async function toggleProjectStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  const status = String(formData.get("status") ?? "draft").trim() || "draft";

  if (!id) throw new Error("Missing project id");

  const { error } = await supabaseServer.from("projects").update({ status }).eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
  revalidatePath("/sponsorship");
}
