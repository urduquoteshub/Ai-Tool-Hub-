import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to AI Tool Hub 🤖</h1>
      <p className="text-lg mb-6 text-gray-700">
        Explore the latest free AI tools and creative ideas for your next project.
      </p>
      <div className="space-x-4">
        <Link href="/tools" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Explore Tools
        </Link>
        <Link href="/blog" className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300">
          Read Blog
        </Link>
      </div>
    </div>
  );
    }
