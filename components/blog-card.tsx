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
    <Card className="hover:shadow-lg transition-shadow duration-300 border-green-200 border-2 border-opacity-40">
      <CardHeader className="pb-2">
        <CardTitle>
          <Link className="hover:underline" href={`/blog/${slug}`}>
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{excerpt}</p>
        <p className="text-xs text-muted-foreground mt-2">{date}</p>
      </CardContent>
    </Card>
  );
}
