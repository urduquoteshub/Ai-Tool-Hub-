import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* ===== NAVBAR ===== */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AI Tool Hub
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <Link href="/prompt-builder" className="hover:text-blue-600">
              🧩 AI Prompt Builder
            </Link>
            <Link href="/ai-tools" className="hover:text-blue-600">
              🧠 AI Tools
            </Link>
            <Link href="/image-generator" className="hover:text-blue-600">
              🖼️ Image Generator
            </Link>
            <Link href="/blogs" className="hover:text-blue-600">
              ✍️ Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t px-4 py-2 space-y-2 text-center font-medium">
            <Link href="/prompt-builder" className="block text-blue-600">
              🧩 AI Prompt Builder
            </Link>
            <Link href="/ai-tools" className="block text-blue-600">
              🧠 AI Tools
            </Link>
            <Link href="/image-generator" className="block text-blue-600">
              🖼️ Image Generator
            </Link>
            <Link href="/blogs" className="block text-blue-600">
              ✍️ Blog
            </Link>
          </nav>
        )}
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-5 py-8">{children}</main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} AI Tool Hub — All Rights Reserved
      </footer>
    </div>
  );
}
