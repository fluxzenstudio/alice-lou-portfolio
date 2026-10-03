// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu if screen becomes desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide navbar on home page
  if (pathname === "/") return null;

  const links = [
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/athletics", label: "Athletics" },
    { href: "/music", label: "Music" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "2px solid #e7e5e4",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80px",
            boxSizing: "border-box",
            paddingLeft: "48px",
            paddingRight: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand: Logo + Name */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
            }}
          >
            <Image 
                src="/alice-logo.png" 
                alt="Alice Lou logo" 
                width={60} 
                height={60} 
                style={{ width: 'auto', height: 'auto' }} // Keeps aspect ratio if dimensions aren't exact
                priority // Use this ONLY for above-the-fold images like the Hero logo
            />
            
            <span
              className="font-serif"
              style={{
                color: "#C5A059",
                fontSize: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              Alice Lou
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "#C5A059",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "rotate(0)",
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "#C5A059",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: "#C5A059",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "rotate(0)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "2px solid #e7e5e4",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
            zIndex: 40,
            padding: "24px 40px 32px 40px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                  style={{
                    fontSize: "18px",
                    padding: "8px 0",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}