import Link from "next/link";

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Muhammad Shan</h1>
      <p>
        Welcome to <strong>AI Tool Hub</strong> — a platform created by{" "}
        <strong>Muhammad Shan</strong> to share the latest AI tools, blogs, and
        tutorials for creators, developers, and entrepreneurs.
      </p>

      <p>
        My mission is to make Artificial Intelligence easy and accessible for
        everyone. I post daily updates on trending AI tools, affiliate
        marketing ideas, and tech innovations that help people earn and grow
        online.
      </p>

      <div style={styles.contactBox}>
        <h3>📧 Contact Me</h3>
        <p>Email: <a href="mailto:alishan8543402@gmail.com">alishan8543402@gmail.com</a></p>
      </div>

      <Link href="/">← Back to Home</Link>
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
  contactBox: {
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "10px",
    margin: "30px 0",
  },
};
