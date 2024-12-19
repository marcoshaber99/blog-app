import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot be longer than 100 characters")
    .trim()
    .refine((val) => val.length > 0, {
      message: "Title cannot be empty or just whitespace",
    }),
  content: z
    .string()
    .min(1, "Content is required")
    .max(10000, "Content cannot be longer than 10000 characters")
    .trim()
    .refine((val) => val.length > 0, {
      message: "Content cannot be empty or just whitespace",
    }),
});

export type CreatePostInput = z.infer<typeof PostSchema>;
