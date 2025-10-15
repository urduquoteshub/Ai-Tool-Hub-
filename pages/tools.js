import { useState } from "react";

export default function Tools() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    setPrompt(`Create a ${style} prompt about ${topic}.`);
  };

  return (
    <div className="container">
      <h1>AI Prompt Builder 🧩</h1>
      <p>Generate perfect prompts for ChatGPT, Midjourney, or any AI model!</p>

      <input
        placeholder="Enter your topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        placeholder="Enter prompt style (e.g. funny, serious)"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />
      <button onClick={generatePrompt}>Generate</button>

      {prompt && (
        <div className="result">
          <h3>Your Prompt:</h3>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}
