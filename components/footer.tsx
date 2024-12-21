export default function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} Marcode. All rights reserved.
      </div>
    </footer>
  );
}
