import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseServer } from "@/lib/supabase/server";
import ContactConfirmation from "@/components/email/ContactConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const ticket = `AGRIC-${Date.now()}`;

    const { error } = await supabaseServer
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
      ]);

    if (error) {
      console.error(error);

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

    try {
      await resend.emails.send({
        from: "AGRIC AI <onboarding@resend.dev>",
        to: email,
        subject: "We've received your message",
        react: ContactConfirmation({
          name,
          subject,
          message,
          ticket,
        }),
      });
    } catch (emailError) {
      console.error("Email Error:", emailError);
    }

    return NextResponse.json({
      success: true,
      ticket,
      message: "Your message has been received successfully.",
    });
  } catch (error) {
    console.error(error);

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