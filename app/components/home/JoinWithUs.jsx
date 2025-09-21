"use client";
import { useEffect } from "react";

export default function JoinWithUs() {
  useEffect(() => {
    // simple fade-up like Webflow interaction
    const els = document.querySelectorAll("[data-animate]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in-view")
        ),
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="how-we-help-section" id="join-with-us">
      <div className="container w-container">
        <div className="community-content-wrap">
          <div className="w-layout-grid volunteer-content-grid">
            {/* LEFT: text + image + button */}
            <div className="helping-content-wrap" data-animate="fade-up">
              <div className="section-title-wrap">
                <p className="sub-title white">Join With Us</p>
                <h2 className="section-title white">
                  Join With Humanity To Give Education For Poor Children
                </h2>
                <p className="section-content white">
                  Join us in the fight against poverty! By becoming a Champion
                  for the poor, you can create your own webpage and raise funds
                  for the poorest of the poor in the Caribbean and Latin
                  America.
                </p>
              </div>

              <div className="helping-image-wrap">
                <img
                  className="contact-forms-image"
                  src="/assets/images/homepage/8.jpg"
                  alt="Banner Image For Volunteer Section"
                  style={{ borderRadius: "8px" }}
                  loading="lazy"
                />
              </div>

              <div className="helping-button-wrap">
                <a href="/project" className="button large w-button">
                  Donate Now
                </a>
              </div>
            </div>

            {/* RIGHT: bordered form */}
            <div className="volunteer-form-wrap" data-animate="fade-up">
              <div className="section-title-wrap">
                <h2 className="section-title white">Become A Volunteer</h2>
              </div>

              <form className="home-page-form" method="get">
                <input
                  className="form-content w-input"
                  type="text"
                  name="Name"
                  placeholder="Full Name*"
                  required
                />
                <input
                  className="form-content w-input"
                  type="email"
                  name="Email"
                  placeholder="Email Address*"
                  required
                />
                <input
                  className="form-content w-input"
                  type="tel"
                  name="Phone-number"
                  placeholder="Phone Number*"
                  required
                />
                <textarea
                  className="form-content message-area w-input"
                  name="message-field"
                  placeholder="Message*"
                  maxLength="5000"
                />
                <input
                  type="submit"
                  className="white-button large w-button"
                  value="Submit Now"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* dark overlay behind content to match OG */}
      <div className="how-we-help-overlay"></div>
    </section>
  );
}
