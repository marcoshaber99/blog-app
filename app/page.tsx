import BlogCard from "@/components/blog-card";
import prisma from "@/app/utils/prisma";
import { formatDate } from "@/lib/utils";
import { Post } from "@/types/post";

export default async function Home() {
  const posts: Post[] = await prisma.post.findMany({
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.content.slice(0, 100) + "..."}
              date={formatDate(post.createdAt)}
              slug={post.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
