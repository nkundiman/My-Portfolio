"use client";

import { useMemo, useState } from "react";
import { Mail, Eye, Trash2 } from "lucide-react";

import ReplyModal from "./ReplyModal";
import ViewMessageModal from "./ViewMessageModal";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function MessagesTable({
  data,
}: {
  data: Message[];
}) {
  const [search, setSearch] = useState("");

  const [replyOpen, setReplyOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] =
    useState<Message | null>(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [viewMessage, setViewMessage] =
    useState<Message | null>(null);

  const filteredMessages = useMemo(() => {
    const value = search.toLowerCase();

    return data.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.subject.toLowerCase().includes(value) ||
        item.message.toLowerCase().includes(value)
      );
    });
  }, [search, data]);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Messages
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              Showing {filteredMessages.length} of {data.length} messages
            </p>
          </div>

          <input
            type="text"
            placeholder="🔍 Search by name, email, subject or message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 border rounded-lg px-4 py-3 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-gray-100 dark:bg-gray-700">

              <tr>

                <th className="px-6 py-4 text-left">#</th>

                <th className="px-6 py-4 text-left">Name</th>

                <th className="px-6 py-4 text-left">Email</th>

                <th className="px-6 py-4 text-left">Subject</th>

                <th className="px-6 py-4 text-left">Date</th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredMessages.map((message, index) => (

                <tr
                  key={message.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >

                  <td className="px-6 py-4 font-bold">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {message.name}
                  </td>

                  <td className="px-6 py-4">
                    <a
                      href={`mailto:${message.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {message.email}
                    </a>
                  </td>

                  <td className="px-6 py-4">
                    {message.subject}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">

                    {new Date(
                      message.created_at
                    ).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      {/* Reply */}

                      <button
                        onClick={() => {
                          setSelectedMessage(message);
                          setReplyOpen(true);
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition"
                        title="Reply"
                      >
                        <Mail size={18} />
                      </button>

                      {/* View */}

                      <button
                        onClick={() => {
                          setViewMessage(message);
                          setViewOpen(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
                        title="View Message"
                      >
                        <Eye size={18} />
                      </button>

                      {/* Delete */}

                      <button
                        onClick={() => {
                          alert("Delete feature coming in the next step.");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {filteredMessages.length === 0 && (

                <tr>

                  <td
                    colSpan={6}
                    className="py-12 text-center text-gray-500 dark:text-gray-400"
                  >
                    No messages found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Reply Modal */}

      {selectedMessage && (

        <ReplyModal
          open={replyOpen}
          onClose={() => {
            setReplyOpen(false);
            setSelectedMessage(null);
          }}
          email={selectedMessage.email}
          name={selectedMessage.name}
          subject={selectedMessage.subject}
        />

      )}

      {/* View Message Modal */}

      {viewMessage && (

        <ViewMessageModal
          open={viewOpen}
          message={viewMessage}
          onClose={() => {
            setViewOpen(false);
            setViewMessage(null);
          }}
          onReply={() => {
            setViewOpen(false);

            setSelectedMessage(viewMessage);

            setReplyOpen(true);
          }}
          onDelete={() => {
            alert("Delete feature coming in the next step.");
          }}
        />

      )}

    </>
  );
}