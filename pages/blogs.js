import Link from "next/link";

export default function Blogs() {
  return (
    <div style={styles.container}>
      <h1>Latest AI Blogs</h1>
      <p>Stay updated with AI trends, guides, and tutorials.</p>

      <ul style={styles.blogList}>
        <li>
          <Link href="/blog/first-post">Top 10 Free AI Tools of 2025</Link>
        </li>
        <li>
          <Link href="/blog/second-post">How to Use AI for Content Creation</Link>
        </li>
        <li>
          <Link href="/blog/third-post">Affiliate Marketing with AI Tools</Link>
        </li>
      </ul>

      <Link href="/">← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: { padding: "60px 20px", textAlign: "center" },
  blogList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2.2em",
    fontSize: "18px",
  },
};
