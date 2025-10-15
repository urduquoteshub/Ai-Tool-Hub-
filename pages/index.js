import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.body}>
      <nav style={styles.navbar}>
        <Link href="/">AI Tool Hub</Link>
        <div style={styles.navLinks}>
          <Link href="/tools">AI Tools</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <header style={styles.hero}>
        <h1>Welcome to AI Tool Hub</h1>
        <p>Explore trending AI tools, blogs, and creative ideas daily.</p>
        <Link href="/tools">
          <button style={styles.button}>Explore Tools</button>
        </Link>
      </header>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f5f7fa",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111827",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  hero: {
    textAlign: "center",
    padding: "100px 20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginTop: "20px",
    cursor: "pointer",
  },
};
