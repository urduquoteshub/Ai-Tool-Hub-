export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to AI Tool Hub 🤖</h1>
      <p>Your daily destination for free AI tools, tech blogs & automation tips!</p>

      <div className="cards">
        <a href="/tools" className="card">🧠 AI Prompt Builder</a>
        <a href="/privacy" className="card">🔒 Privacy Policy</a>
      </div>
    </div>
  );
}
