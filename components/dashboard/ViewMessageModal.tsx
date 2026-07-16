"use client";

import { X, Mail, Trash2 } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
 subject: string;
  message: string;
  created_at: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  message: Message | null;
  onReply: () => void;
  onDelete: () => void;
}

export default function ViewMessageModal({
  open,
  onClose,
  message,
  onReply,
  onDelete,
}: Props) {
  if (!open || !message) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">

          <h2 className="text-2xl font-bold dark:text-white">
            Message Details
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-semibold dark:text-white">
                {message.name}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>

              <a
                href={`mailto:${message.email}`}
                className="text-blue-600 hover:underline"
              >
                {message.email}
              </a>

            </div>

            <div>
              <p className="text-gray-500">Subject</p>

              <p className="font-semibold dark:text-white">
                {message.subject}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Date</p>

              <p className="font-semibold dark:text-white">
                {new Date(message.created_at).toLocaleString()}
              </p>
            </div>

          </div>

          <div>

            <p className="text-gray-500 mb-2">
              Message
            </p>

            <div className="border rounded-xl p-5 bg-gray-50 dark:bg-gray-800 whitespace-pre-wrap dark:text-white">

              {message.message}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 p-6 border-t dark:border-gray-700">

          <button
            onClick={onReply}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Mail size={18} />
            Reply
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Trash2 size={18} />
            Delete
          </button>

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-lg"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}