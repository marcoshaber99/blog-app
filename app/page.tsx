import BlogCard from "@/components/blog-card";
import prisma from "@/app/utils/prisma";
import { formatDate, createExcerpt } from "@/lib/utils";
import { Post } from "@/types/post";

export default async function Home() {
  // Fetch posts sorted by creation date (newest first)
  const posts: Post[] = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Latest Posts</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No posts yet. Why not create one?
        </p>
      ) : (
        // Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={createExcerpt(post.content)}
              date={formatDate(post.createdAt)}
              slug={post.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
