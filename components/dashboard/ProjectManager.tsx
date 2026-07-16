import Link from "next/link";
import { CheckCircle2, Pencil, PlusCircle, Trash2, XCircle } from "lucide-react";
import {
  createProject,
  deleteProject,
  toggleProjectStatus,
  updateProject,
} from "@/app/dashboard/actions";
import type { Project } from "@/app/type/project";

interface Props {
  projects: Project[];
  editingProjectId?: string | null;
}

export default function ProjectManager({
  projects,
  editingProjectId,
}: Props) {
  const editingProject = projects.find((project) => project.id === editingProjectId) ?? null;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              Project management
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {editingProject ? "Edit project" : "Create a new project"}
            </h2>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <PlusCircle size={16} />
            {editingProject ? "Start a new project" : "Refresh form"}
          </Link>
        </div>

        <form
          action={editingProject ? updateProject : createProject}
          className="grid gap-4 md:grid-cols-2"
        >
          {editingProject ? (
            <input type="hidden" name="id" value={editingProject.id} />
          ) : null}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Title</span>
            <input
              name="title"
              defaultValue={editingProject?.title ?? ""}
              required
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Slug</span>
            <input
              name="slug"
              defaultValue={editingProject?.slug ?? ""}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:col-span-2">
            <span>Short description</span>
            <textarea
              name="short_description"
              defaultValue={editingProject?.short_description ?? ""}
              rows={3}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:col-span-2">
            <span>Description</span>
            <textarea
              name="description"
              defaultValue={editingProject?.description ?? ""}
              rows={5}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Category</span>
            <input
              name="category"
              defaultValue={editingProject?.category ?? ""}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Status</span>
            <select
              name="status"
              defaultValue={editingProject?.status ?? "draft"}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Goal</span>
            <input
              name="goal"
              type="number"
              defaultValue={editingProject?.goal ?? 0}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Raised</span>
            <input
              name="raised"
              type="number"
              defaultValue={editingProject?.raised ?? 0}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Location</span>
            <input
              name="location"
              defaultValue={editingProject?.location ?? ""}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Image URL</span>
            <input
              name="image_url"
              defaultValue={editingProject?.image_url ?? ""}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            <span>Video URL</span>
            <input
              name="video_url"
              defaultValue={editingProject?.video_url ?? ""}
              className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-green-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200">
            <input
              name="featured"
              type="checkbox"
              defaultChecked={editingProject?.featured ?? false}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            Mark as featured
          </label>

          <div className="flex items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <CheckCircle2 size={16} />
              {editingProject ? "Save changes" : "Create project"}
            </button>

            {editingProject ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <XCircle size={16} />
                Cancel
              </Link>
            ) : null}
          </div>
        </form>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Existing projects
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update visibility, status, and funding details from here.
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {projects.length} total project{projects.length === 1 ? "" : "s"}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            No projects yet. Create your first sponsorship project to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Goal</th>
                  <th className="px-4 py-3">Raised</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {projects.map((project) => (
                  <tr key={project.id} className="text-sm text-gray-700 dark:text-gray-200">
                    <td className="px-4 py-4">
                      <div className="font-semibold">{project.title}</div>
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        /{project.slug}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          project.status === "active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : project.status === "archived"
                              ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">${project.goal.toLocaleString()}</td>
                    <td className="px-4 py-4">${project.raised.toLocaleString()}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/dashboard?edit=${project.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                        >
                          <Pencil size={14} />
                          Edit
                        </Link>

                        <form action={toggleProjectStatus}>
                          <input type="hidden" name="id" value={project.id} />
                          <input
                            type="hidden"
                            name="status"
                            value={project.status === "active" ? "draft" : "active"}
                          />
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full border border-green-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-green-700 transition hover:bg-green-50 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-900/20"
                          >
                            {project.status === "active" ? "Deactivate" : "Activate"}
                          </button>
                        </form>

                        <form action={deleteProject}>
                          <input type="hidden" name="id" value={project.id} />
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full border border-red-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-red-700 transition hover:bg-red-50 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/20"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
