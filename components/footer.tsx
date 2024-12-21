export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} Marcode. All rights reserved.
      </div>
    </footer>
  );
}
