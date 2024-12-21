import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Props for a blog post preview card
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
    // Card with hover effect and subtle border
    <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20 border-2">
      <CardHeader className="pb-2">
        <CardTitle>
          <Link className="hover:underline" href={`/blog/${slug}`}>
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Excerpt with 3-line clamp for consistent height */}
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
        {/* Semantic time tag for better accessibility */}
        <time dateTime={date} className="text-xs text-muted-foreground block">
          {date}
        </time>
      </CardContent>
    </Card>
  );
}
