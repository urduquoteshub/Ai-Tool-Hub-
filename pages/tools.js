import Link from "next/link";

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">AI Tools Collection 🚀</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Prompt Builder */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">AI Prompt Builder</h2>
          <p className="text-gray-600 mb-3">
            Generate smart prompts for ChatGPT, Midjourney, or any AI tool.
          </p>
          <Link href="/prompt-builder" className="text-blue-600 hover:underline">
            Try Now →
          </Link>
        </div>

        {/* AI Image Generator */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">AI Image Generator</h2>
          <p className="text-gray-600 mb-3">
            Create stunning AI-generated images with one click.
          </p>
          <a href="https://playground.com" target="_blank" className="text-blue-600 hover:underline">
            Open Tool →
          </a>
        </div>

        {/* Voice Clone Tool */}
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">AI Voice Clone</h2>
          <p className="text-gray-600 mb-3">
            Generate realistic human-like voice clones for your videos.
          </p>
          <a href="https://elevenlabs.io" target="_blank" className="text-blue-600 hover:underline">
            Try Voice Clone →
          </a>
        </div>
      </div>
    </div>
  );
}
