import { useEffect } from "react";

export default function Home() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* 🌐 Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-center md:justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold text-blue-600">AI Tool Hub</h1>
          <div className="flex flex-wrap gap-3 text-sm md:text-base">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">
              Home
            </button>
            <button onClick={() => scrollToSection("prompt")} className="hover:text-blue-600">
              Prompt Builder
            </button>
            <button onClick={() => scrollToSection("tools")} className="hover:text-blue-600">
              AI Tools
            </button>
            <button onClick={() => scrollToSection("images")} className="hover:text-blue-600">
              Image Generator
            </button>
            <button onClick={() => scrollToSection("blogs")} className="hover:text-blue-600">
              Blogs
            </button>
          </div>
        </div>
      </nav>

      {/* 🌍 Sections */}
      <div id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AI Tool Hub</h2>
        <p className="max-w-xl text-gray-600">
          Discover the latest AI tools, prompt builders, and creative resources to power your workflow.
        </p>
      </div>

      {/* 🧩 AI Prompt Builder Section */}
      <section id="prompt" className="h-screen bg-white flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-3">🧩 AI Prompt Builder</h2>
        <p className="max-w-lg text-gray-600 mb-4">
          Generate perfect prompts for ChatGPT, Midjourney, and more with one click.
        </p>
        <a href="#tools" className="text-blue-600 hover:underline">
          Explore AI Tools ↓
        </a>
      </section>

      {/* 🧠 AI Tools Section */}
      <section id="tools" className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-3">🧠 Trending AI Tools</h2>
        <p className="max-w-lg text-gray-600 mb-6">
          Explore powerful AI websites that help in creativity and automation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">ChatGPT</h3>
            <p className="text-gray-600 mb-3">AI chat assistant for text, coding, and creativity.</p>
            <a href="https://chat.openai.com" className="text-blue-600 hover:underline" target="_blank">Try ChatGPT →</a>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Midjourney</h3>
            <p className="text-gray-600 mb-3">Generate artistic AI images using text prompts.</p>
            <a href="https://midjourney.com" className="text-blue-600 hover:underline" target="_blank">Try Midjourney →</a>
          </div>
        </div>
      </section>

      {/* 🖼️ Image Generator Section */}
      <section id="images" className="h-screen bg-white flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-3">🖼️ AI Image Generator</h2>
        <p className="max-w-lg text-gray-600 mb-6">
          Create AI-powered visuals using advanced online image generation tools.
        </p>
        <ul className="space-y-3">
          <li><a href="https://lexica.art" target="_blank" className="text-blue-600 hover:underline">🎨 Lexica</a></li>
          <li><a href="https://playground.ai" target="_blank" className="text-blue-600 hover:underline">🧠 Playground AI</a></li>
          <li><a href="https://ideogram.ai" target="_blank" className="text-blue-600 hover:underline">✨ Ideogram</a></li>
        </ul>
      </section>

      {/* ✍️ Blog Section */}
      <section id="blogs" className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">✍️ Latest AI Blogs</h2>

        <div className="space-y-8 max-w-3xl mx-auto text-left">
          <article className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Top 5 Free AI Tools for 2025</h3>
            <p className="text-gray-600 mb-2">
              Discover the best free AI tools that can make your work faster and smarter.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Read More →</a>
          </article>

          <article className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">How to Write Effective AI Prompts</h3>
            <p className="text-gray-600 mb-2">
              Learn how to craft better prompts for AI chatbots and art generators.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Read More →</a>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2025 AI Tool Hub — All Rights Reserved.
      </footer>
    </div>
  );
        }
        
