import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl ">
          Marcode
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
