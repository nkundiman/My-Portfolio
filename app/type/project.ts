export interface Project {
  id: string;

  title: string;

  slug: string;

  short_description: string;

  description: string;

  category: string;

  goal: number;

  raised: number;

  location: string;

  image_url: string;

  video_url: string;

  featured: boolean;

  status: string;

  created_at: string;
}