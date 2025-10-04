// app/components/shared/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false); // mobile inline dropdown
  const rootRef = useRef(null);

  // helper: mark link active if path matches or is a subpath
  const isActive = (href) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setPagesOpen(false);
  }, [pathname]);

  // scroll-lock while mobile menu is open
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = mobileOpen
      ? "hidden"
      : prev || "";
    return () => (document.documentElement.style.overflow = prev || "");
  }, [mobileOpen]);

  // outside click + Esc
  useEffect(() => {
    const onDown = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setMobileOpen(false);
        setPagesOpen(false);
      }
    };
    const onKey = (e) =>
      e.key === "Escape" && (setMobileOpen(false), setPagesOpen(false));
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="navbar w-nav" role="banner" ref={rootRef}>
      {/* tiny global style: orange for active nav link */}
      <style jsx global>{`
        .nav-link.is-active,
        .w-nav-link.is-active {
          color: #ff7a00 !important;
        }
      `}</style>

      <div className="container w-container">
        <div className="nav-flex">
          {/* Brand */}
          <Link
            href="/"
            className="brand w-nav-brand"
            aria-label="Humanity Home"
          >
            <img
              className="brand-logo"
              src="/assets/images/logo/logo.png"
              alt="Humanity"
            />
          </Link>

          <div className="nav-right">
            {/* Donate — always visible */}
            <Link href="/project" className="button nav-button w-button">
              DONATE
            </Link>

            {/* Main menu */}
            <nav
              id="site-nav"
              className="nav-menu w-nav-menu"
              aria-label="Main"
              data-open={mobileOpen ? "true" : "false"}
            >
              <Link
                href="/"
                className={`nav-link w-nav-link nav-sep ${
                  isActive("/") ? "is-active" : ""
                }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`nav-link w-nav-link nav-sep ${
                  isActive("/about") ? "is-active" : ""
                }`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About Us
              </Link>

              <Link
                href="/events"
                className={`nav-link w-nav-link nav-sep ${
                  isActive("/events") ? "is-active" : ""
                }`}
                aria-current={isActive("/events") ? "page" : undefined}
              >
                Events
              </Link>

              <Link
                href="/project"
                className={`nav-link w-nav-link ${
                  isActive("/project") ? "is-active" : ""
                }`}
                aria-current={isActive("/project") ? "page" : undefined}
              >
                Projects
              </Link>

              <Link
                href="/campaigns"
                className={`nav-link w-nav-link ${
                  isActive("/campaigns") ? "is-active" : ""
                }`}
                aria-current={isActive("/campaigns") ? "page" : undefined}
              >
                Campaigns
              </Link>

              <Link
                href="/volunteer"
                className={`nav-link w-nav-link ${
                  isActive("/volunteer") ? "is-active" : ""
                }`}
                aria-current={isActive("/volunteer") ? "page" : undefined}
              >
                Volunteer
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              className="menu-button w-nav-button"
              aria-controls="site-nav"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
            >
              <span className={`hamburger ${mobileOpen ? "is-open" : ""}`}>
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
