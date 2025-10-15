import { useState } from "react";

export default function PromptBuilder() {
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">AI Prompt Builder 🧩</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Generate perfect prompts for ChatGPT, Midjourney, or any AI model!
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md">
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
            
