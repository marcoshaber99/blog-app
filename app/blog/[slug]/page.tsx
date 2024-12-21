import { formatDate, sanitizeHtml } from "@/lib/utils";
import prisma from "@/app/utils/prisma";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: {
    slug: string;
  };
}
export default async function BlogPost({ params }: BlogPostProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (!post) {
    notFound();
  }

  const sanitizedContent = sanitizeHtml(post.content);

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{formatDate(post.createdAt)}</p>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </article>
  );
}
