import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-5xl flex justify-between items-center">
        <Link href="/" className="text-xl">
          Marcode
        </Link>
        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/create">Create</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
