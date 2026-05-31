import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="logo">TechMusic</div>

  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/features">Features</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
  );
}

export default Navbar;