export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()} <strong>AI Tool Hub</strong> | Created by{" "}
        <a href="mailto:alishan8543402@gmail.com">Muhammad Shan</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111827",
    color: "#fff",
    marginTop: "50px",
    fontSize: "14px",
  },
};
