"use client";

import { useEffect } from "react";

export default function TestConnection() {
  useEffect(() => {
    const testConnection = async () => {
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

        console.log("Status:", response.status);

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
    };

    testConnection();
  }, []);

  return null;
}