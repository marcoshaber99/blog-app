import BlogCard from "@/components/blog-card";

// dummy data for blog posts
const blogPosts = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2023-06-01",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of React Hooks",
    excerpt: "Explore how React Hooks can simplify your component logic",
    date: "2023-06-15",
    slug: "power-of-react-hooks",
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover techniques to create beautiful, responsive designs with Tailwind CSS",
    date: "2023-07-01",
    slug: "mastering-tailwind-css",
  },
];

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
