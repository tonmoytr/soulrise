"use client";
import Link from "next/link";
import { useRef } from "react";

export default function AboutIntro() {
  const dlgRef = useRef(null);

  const openVideo = (e) => {
    e.preventDefault();
    dlgRef.current?.showModal();
  };
  const closeVideo = () => dlgRef.current?.close();

  return (
    <div className="about-us-intro-section">
      <div className="container w-container">
        <div className="about-us-intro-content-wrap">
          <div className="w-layout-grid about-us-intro-grid">
            {/* Left: Education */}
            <div className="about-us-education-wrap">
              <div className="section-title-wrap">
                <h2 className="section-title">HOPE</h2>
                <p className="about-us-intro-content">
                  Hope isn’t handed out—it’s stitched into every act of
                  kindness. One lesson, one moment of care can rewrite someone’s
                  tomorrow.
                </p>
              </div>
              <Link href="/about-us" className="white-button medium w-button">
                Discover
              </Link>
            </div>

            {/* Middle: Video card (replaces Webflow lightbox) */}
            <div className="about-us-image-wrap">
              {/* Clickable play button */}
              <a
                href="#"
                className="video-link w-inline-block"
                onClick={openVideo}
              >
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2e103c228a4c164eccedf_Play%20Button.svg"
                  alt="Play video"
                  className="video-play-button"
                />
              </a>
              <div className="about-us-background-wrap"></div>

              {/* Lightweight modal using <dialog> */}
              <dialog
                ref={dlgRef}
                style={{
                  border: "none",
                  padding: 0,
                  maxWidth: "940px",
                  width: "90%",
                }}
              >
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/j9JfdQgaeRk"
                    title="SoulRise video"
                    allow="autoplay; fullscreen"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <button
                  onClick={closeVideo}
                  className="white-button medium w-button"
                  style={{ margin: "16px auto", display: "block" }}
                >
                  Close
                </button>
              </dialog>
            </div>

            {/* Right: Become a Volunteer */}
            <div className="about-us-volunteer-wrap">
              <div className="section-title-wrap">
                <h2 className="section-title white">Lend your strength</h2>
                <p className="about-us-intro-content white">
                  Your kindness today can help transform someone’s entire future
                  with lasting impact
                </p>
              </div>
              <Link href="/volunteer" className="about-link">
                Stand with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
