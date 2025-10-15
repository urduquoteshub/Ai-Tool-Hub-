import Link from "next/link";

export default function FirstPost() {
  return (
    <div style={styles.container}>
      <h1>Top 10 Free AI Tools of 2025</h1>
      <p>Discover the most powerful and free AI tools to grow your business and creativity in 2025.</p>

      <ul>
        <li>ChatGPT — AI Text Generation</li>
        <li>Midjourney — Image Creation</li>
        <li>Runway ML — Video Editing</li>
        <li>Canva Magic Studio — AI Design</li>
        <li>Writesonic — Blog Generator</li>
        <li>Pictory — Video Script to Reel</li>
        <li>Durable — AI Website Builder</li>
        <li>Gamma — AI Presentation Maker</li>
        <li>Leonardo AI — Art Creator</li>
        <li>Soundful — AI Music Generator</li>
      </ul>

      <Link href="/blogs">← Back to Blogs</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8em",
  },
};
    
