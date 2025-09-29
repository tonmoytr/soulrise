"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false); // mobile inline dropdown
  const rootRef = useRef(null);

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
              <Link href="/" className="nav-link w-nav-link nav-sep">
                Home
              </Link>
              <Link href="/about" className="nav-link w-nav-link nav-sep">
                About Us
              </Link>

              {/* PAGES (desktop: hover; mobile: tap to expand) */}
              {/* <div className="w-dropdown nav-dropdown nav-sep pages-btn">
                <button
                  type="button"
                  className="w-dropdown-toggle nav-link dropdown"
                  aria-haspopup="true"
                  aria-expanded={pagesOpen}
                  onClick={() => setPagesOpen((s) => !s)}
                >
                  <span className="drop-title">Pages</span>
                  <svg
                    className="nav-caret"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1.5 6 6.5 11 1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className="w-dropdown-list nav-dd"
                  data-open={pagesOpen ? "true" : "false"}
                >
                  <Link href="/project" className="w-dropdown-link nav-dd-link">
                    Projects
                  </Link>
                  <Link href="/team" className="w-dropdown-link nav-dd-link">
                    Team
                  </Link>
                  <Link
                    href="/volunteer"
                    className="w-dropdown-link nav-dd-link"
                  >
                    Volunteer
                  </Link>

                  <Link href="/blog" className="w-dropdown-link nav-dd-link">
                    Blog
                  </Link>
                </div>
              </div> */}

              <Link href="/events" className="nav-link w-nav-link nav-sep">
                Events
              </Link>
              <Link href="/project" className="nav-link w-nav-link">
                Projects
              </Link>
              <Link href="/blog" className="nav-link w-nav-link">
                Blog
              </Link>
              <Link href="/volunteer" className="nav-link w-nav-link">
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
