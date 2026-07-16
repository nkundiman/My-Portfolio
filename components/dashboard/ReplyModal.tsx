"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  email: string;
  name: string;
  subject: string;
}

export default function ReplyModal({
  open,
  onClose,
  email,
  name,
  subject,
}: Props) {
  const [message, setMessage] = useState(
`Dear ${name},

Thank you for contacting me through my portfolio.

I appreciate your message and will get back to you as soon as possible.

Best regards,

Augustin Nkundimana
Founder & CEO, AGRIC AI`
  );

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  if (!open) return null;

  async function sendReply() {
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: `Re: ${subject}`,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(`❌ ${data.error}`);
      } else {
        setStatus("✅ Email sent successfully!");
      }

    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Reply to {name}
            </h2>

            <p className="text-gray-500">
              {email}
            </p>

          </div>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <input
            readOnly
            value={`Re: ${subject}`}
            className="w-full border rounded-lg p-3 bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          />

          <textarea
            rows={12}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700"
          />

          {status && (
            <p className="font-semibold">
              {status}
            </p>
          )}

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 p-6 border-t dark:border-gray-700">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={sendReply}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Reply"}
          </button>

        </div>

      </div>

    </div>
  );
}