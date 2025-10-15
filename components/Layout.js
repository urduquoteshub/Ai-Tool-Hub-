import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} AI Tool Hub. All Rights Reserved.</p>
      </footer>
    </>
  );
}
