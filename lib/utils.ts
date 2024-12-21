import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";

// Utility for merging Tailwind CSS classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to: "January 21, 2024"
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}

export function createExcerpt(
  htmlContent: string,
  maxLength: number = 150
): string {
  // Strip HTML tags and normalize whitespace
  const textContent = htmlContent.replace(/<[^>]+>/g, " ").trim();

  if (textContent.length <= maxLength) {
    return textContent;
  }

  // Cut at the last word boundary to avoid breaking words
  return (
    textContent.slice(0, maxLength).split(" ").slice(0, -1).join(" ") + "..."
  );
}
