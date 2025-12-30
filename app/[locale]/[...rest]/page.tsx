import { notFound } from "next/navigation";

// This catch-all route handles any unmatched routes within the locale
// and triggers the not-found page
export default function CatchAllPage() {
  notFound();
}

