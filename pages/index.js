import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("prompt");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🌐 Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex flex-wrap justify-center gap-4 shadow-md">
        <button
          onClick={() => setActiveSection("prompt")}
          className={`px-3 py-2 rounded-lg ${activeSection === "prompt" ? "bg-blue-800" : ""}`}
        >
          🧩 AI Prompt Builder
        </button>
        <button
          onClick={() => setActiveSection("tools")}
          className={`px-3 py-2 rounded-lg ${activeSection === "tools" ? "bg-blue-800" : ""}`}
        >
          🧠 AI Tools
        </button>
        <button
          onClick={() => setActiveSection("image")}
          className={`px-3 py-2 rounded-lg ${activeSection === "image" ? "bg-blue-800" : ""}`}
        >
          🖼️ Image Generator
        </button>
        <button
          onClick={() => setActiveSection("blogs")}
          className={`px-3 py-2 rounded-lg ${activeSection === "blogs" ? "bg-blue-800" : ""}`}
        >
          ✍️ Blogs
        </button>
      </nav>

      {/* 🧩 Sections */}
      <div className="p-6">
        {activeSection === "prompt" && <PromptBuilder />}
        {activeSection === "tools" && <AiTools />}
        {activeSection === "image" && <ImageGenerator />}
        {activeSection === "blogs" && <Blogs />}
      </div>
    </div>
  );
}

/* 🧱 Components below same file me honge */

// 🧩 AI Prompt Builder
function PromptBuilder() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Creative");
  const [result, setResult] = useState("");

  const generatePrompt = () => {
    if (!topic) return setResult("⚠️ Please enter a topic first!");
    const templates = [
      `Write a ${tone} and detailed prompt for ${topic}. Include visual and emotional context.`,
      `Create a ${tone} Midjourney prompt about ${topic} with imaginative details.`,
      `Generate a ${tone} ChatGPT prompt that helps describe ${topic} in a powerful way.`,
      `Design a ${tone} AI prompt for ${topic}, adding cinematic mood and story depth.`,
    ];
    const randomPrompt = templates[Math.floor(Math.random() * templates.length)];
    setResult(randomPrompt);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">🧩 AI Prompt Builder</h1>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Generate perfect prompts for ChatGPT, Midjourney, or any AI model!
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter your topic (e.g. Stylish photo ideas)"
          className="border rounded-lg p-3"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Creative</option>
          <option>Professional</option>
          <option>Funny</option>
          <option>Serious</option>
          <option>Emotional</option>
        </select>

        <button
          onClick={generatePrompt}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Generate Prompt
        </button>

        {result && (
          <div className="mt-6 bg-white shadow-md p-4 rounded-lg text-gray-800">
            <h2 className="font-semibold mb-2">✨ Your Prompt:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 🧠 AI Tools Section
function AiTools() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🧠 AI Tools</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore amazing AI platforms that help you generate content and boost creativity.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">ChatGPT</h2>
          <p className="text-gray-600 mb-3">
            Advanced conversational AI for text, coding, and idea generation.
          </p>
          <a href="https://chat.openai.com" target="_blank" className="text-blue-600 hover:underline">
            Try ChatGPT →
          </a>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Midjourney</h2>
          <p className="text-gray-600 mb-3">
            Generate stunning AI art with text-based prompts.
          </p>
          <a href="https://midjourney.com" target="_blank" className="text-blue-600 hover:underline">
            Try Midjourney →
          </a>
        </div>
      </div>
    </div>
  );
}

// 🖼️ Image Generator Section
function ImageGenerator() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🖼️ AI Image Generator</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Create AI-generated images instantly using the best tools.
      </p>

      <ul className="space-y-3 max-w-md mx-auto">
        <li>
          <a href="https://lexica.art" target="_blank" className="text-blue-600 hover:underline">
            🎨 Lexica Art
          </a>
        </li>
        <li>
          <a href="https://playground.ai" target="_blank" className="text-blue-600 hover:underline">
            🧠 Playground AI
          </a>
        </li>
        <li>
          <a href="https://ideogram.ai" target="_blank" className="text-blue-600 hover:underline">
            🪄 Ideogram AI
          </a>
        </li>
      </ul>
    </div>
  );
}

// ✍️ Blogs Section
function Blogs() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">✍️ AI Blog & Insights</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Stay updated with the latest AI tools, tutorials, and creative guides.
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-white shadow p-6 rounded-lg text-left">
          <h2 className="text-xl font-semibold mb-2">Top 5 Free AI Tools for 2025</h2>
          <p className="text-gray-600">
            Explore powerful AI platforms that can help with writing, image generation, and automation.
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg text-left">
          <h2 className="text-xl font-semibold mb-2">How to Write Better AI Prompts</h2>
          <p className="text-gray-600">
            Master the art of prompt engineering to get better results from ChatGPT and Midjourney.
          </p>
        </div>
      </div>
    </div>
  );
      }
      
