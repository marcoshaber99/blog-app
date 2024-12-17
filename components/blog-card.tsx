import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
}: BlogCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-500 border-2">
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
        <CardContent>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
