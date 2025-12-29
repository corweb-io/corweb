import { NextResponse } from "next/server";
import { resend, emailConfig } from "@/lib/resend";
import { ContactEmail } from "@/components/emails/contact-email";

// Validation schema
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const formData = data as Record<string, unknown>;

  // Validate name
  if (
    !formData.name ||
    typeof formData.name !== "string" ||
    formData.name.trim().length < 2
  ) {
    errors.push("Name is required and must be at least 2 characters");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !formData.email ||
    typeof formData.email !== "string" ||
    !emailRegex.test(formData.email)
  ) {
    errors.push("Valid email is required");
  }

  // Validate message
  if (
    !formData.message ||
    typeof formData.message !== "string" ||
    formData.message.trim().length < 10
  ) {
    errors.push("Message is required and must be at least 10 characters");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || undefined,
      message: body.message.trim(),
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: formData.email,
      subject: `New Contact: ${formData.name}${formData.company ? ` (${formData.company})` : ""}`,
      react: ContactEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

