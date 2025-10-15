import Link from "next/link";

export default function Tools() {
  return (
    <div style={styles.container}>
      <h1>AI Tools Directory</h1>
      <p>Find the latest AI tools for creators, marketers, and developers.</p>

      <div style={styles.toolsGrid}>
        <div style={styles.toolCard}>
          <h2>AI Prompt Builder</h2>
          <p>Generate creative prompts for Midjourney, ChatGPT, and more.</p>
          <a href="https://example.com" target="_blank">Try Now</a>
        </div>

        <div style={styles.toolCard}>
          <h2>AI Image Generator</h2>
          <p>Create stunning visuals using AI-powered image generation.</p>
          <a href="https://example.com" target="_blank">Try Now</a>
        </div>
      </div>

      <Link href="/">← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: { padding: "60px 20px", textAlign: "center" },
  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  toolCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};
