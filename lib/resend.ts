import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email sending will fail.");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const emailConfig = {
  from: process.env.RESEND_FROM_EMAIL || "Corweb <onboarding@resend.dev>",
  to: process.env.CONTACT_EMAIL || "hello@corweb.io",
};
