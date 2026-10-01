import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const links = [
  { href: "#Intro-Page", label: "Home" },
  { href: "#About-Me-Page", label: "About Me" },
  { href: "#Projects-Page", label: "Projects" },
  { href: "#Resume-Page", label: "Resume" },
  { href: "#Contact-Page", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <button
        type="button"
        className={`nav-toggle${open ? " open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
