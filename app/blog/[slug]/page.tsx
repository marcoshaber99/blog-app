interface BlogPostProps {
  params: {
    slug: string;
  };
}
export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  );
}
