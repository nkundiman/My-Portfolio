import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseServer } from "@/lib/supabase/server";
import ContactConfirmation from "@/components/email/ContactConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    // Validate request
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Generate Ticket Number
    const ticket = `AGRIC-${Date.now()}`;

    // Save message in Supabase
    const { data, error } = await supabaseServer
      .from("contacts")
      .insert([
        {
          name,
          email,
          subject,
          message,
          ticket,
          status: "New",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    // Send confirmation email
    const emailResponse = await resend.emails.send({
      from: "AGRIC AI <onboarding@resend.dev>",

      // After verifying your domain change this to:
      // from: "AGRIC AI <hello@agric-ai.com>",

      to: email,

      subject: `✅ We've received your message`,

      react: ContactConfirmation({
        name,
        subject,
        message,
        ticket,
      }),
    });

    if (emailResponse.error) {
      console.error("Resend Error:", emailResponse.error);

      return NextResponse.json(
        {
          success: false,
          error: "Message saved but confirmation email failed.",
        },
        {
          status: 500,
        }
      );
    }

    console.log("Message Saved:", data);

    return NextResponse.json(
      {
        success: true,
        ticket,
        message:
          "Thank you! Your message has been received successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}