import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot be longer than 100 characters")
    .trim(),
  content: z
    .string()
    .min(1, "Content is required")
    .max(10000, "Content cannot be longer than 10000 characters")
    .trim(),
});

export type CreatePostInput = z.infer<typeof PostSchema>;
