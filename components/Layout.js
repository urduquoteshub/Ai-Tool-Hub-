import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AI Tools Hub
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link href="/ai-tools" className="hover:text-blue-600 font-medium">
              AI Tools
            </Link>
            <Link href="/image-generator" className="hover:text-blue-600 font-medium">
              Image Generator
            </Link>
            <Link href="/prompts" className="hover:text-blue-600 font-medium">
              Prompts
            </Link>
            <Link href="/blogs" className="hover:text-blue-600 font-medium">
              Blogs
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Tools Hub — All Rights Reserved
      </footer>
    </div>
  );
}
  
