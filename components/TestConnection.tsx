"use client";

import { useEffect } from "react";

export default function TestConnection() {
  useEffect(() => {
    // Run only in development mode
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    async function testConnection() {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Connection Test",
            email: "test@example.com",
            subject: "API Test",
            message: "Testing backend connection.",
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("✅ API Connected");
          console.log(data);
        } else {
          console.error("❌ API Failed");
          console.error(data);
        }
      } catch (error) {
        console.error("❌ Network Error");
        console.error(error);
      }
    }

    testConnection();
  }, []);

  return null;
}