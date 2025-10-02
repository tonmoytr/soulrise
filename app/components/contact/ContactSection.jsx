// app/components/home/ContactSection.jsx
"use client";

import { useCallback, useEffect, useState } from "react";

export default function ContactSection({
  email = "support@soulrise.com",
  phone = "+44 20 7946 095",
  socials = {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    pinterest: "https://www.pinterest.com",
  },
}) {
  const [showToast, setShowToast] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  // auto-hide the toast
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(t);
  }, [showToast]);

  // Phone: digits only
  const onPhoneChange = useCallback((e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setPhoneValue(digitsOnly);
  }, []);

  // Prevent letters from being typed
  const onPhoneKeyDown = useCallback((e) => {
    const allowed = [
      "Backspace",
      "Delete",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ];
    if (allowed.includes(e.key)) return;
    if (/^\d$/.test(e.key)) return;
    e.preventDefault();
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Native validation (HTML5)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // If you later POST somewhere, do it here. On success:
    form.reset();
    setPhoneValue("");
    setShowToast(true); // show toast (top-right)
  }, []);

  return (
    <section className="contact-us-section">
      {/* Toast: TOP-RIGHT */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            background: "#0f766e",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: 10,
            boxShadow: "0 6px 22px rgba(0,0,0,.18)",
            zIndex: 9999,
            fontWeight: 600,
          }}
        >
          ✅ Thanks for Contacting Us
        </div>
      )}

      <div className="container w-container">
        <div className="w-layout-grid contact-us-grid">
          {/* LEFT: static content (unchanged) */}
          <div className="contact-us-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">Contact</p>
              <h2 className="section-title">Get in Touch With Us</h2>
              <p className="section-content">
                We are here to help you at any time all over the world so don’t
                hesitate to reach us at any moment. Here we are providing our
                organization address details for easy of your reach.
              </p>
            </div>

            <div className="contact-email-flex">
              <div className="contact-email-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b565bec00a4aa93295490f_contact-us-mail-icon.svg"
                  alt="Mail"
                  loading="lazy"
                />
              </div>
              <div className="contact-email-content">
                <h3 className="contact-email-title">Message</h3>
                <a href={`mailto:${email}`} className="contact-email-link">
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-phone-flex">
              <div className="contact-phone-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b565be3eba99be2f9761f5_contact-us-phone-icon.svg"
                  alt="Phone"
                  loading="lazy"
                />
              </div>
              <div className="contact-phone-content">
                <h3 className="contact-phone-title">Contact Us</h3>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="contact-phone-link"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="contact-social-media-flex">
              <div className="section-title-wrap">
                <h4 className="section-title">Follow us on social media</h4>
                <p className="social-content">
                  Humanity organization’s process is posted on social media
                  platforms too, so please follow us.
                </p>
              </div>

              <div className="contact-social-link-wrap">
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.instagram}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568c57b892de91e154b20_contact-social-icon-01.svg"
                    alt="Instagram"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.facebook}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568fcc00c482a21352e65_contact-social-icon-02.svg"
                    alt="Facebook"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.twitter}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ecac4f15d48f8233f7950_contact-social-icon-03.svg"
                    alt="Twitter"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.pinterest}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568fcf60a8e4ab178bdcc_contact-social-icon-04.svg"
                    alt="Pinterest"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="contact-us-form-wrap">
            <div className="contact-us-form-content">
              <div className="contact-us-form w-form">
                <form
                  className="contact-form"
                  method="post"
                  onSubmit={onSubmit}
                >
                  {/* Labels added per your request */}
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="contact-form-label w-input"
                    id="contact-name"
                    name="name"
                    placeholder="Enter Your Name*"
                    required
                  />

                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Phone Number
                  </label>
                  {/* PHONE: digits only, validated; no letters */}
                  <input
                    type="tel"
                    className="contact-form-label w-input"
                    id="contact-phone"
                    name="phone"
                    placeholder="Phone Number*"
                    inputMode="numeric"
                    pattern="^\d{6,15}$"
                    title="Please enter digits only (6–15)."
                    value={phoneValue}
                    onChange={onPhoneChange}
                    onKeyDown={onPhoneKeyDown}
                    required
                  />

                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="contact-form-label w-input"
                    id="contact-email"
                    name="email"
                    placeholder="Email Address*"
                    required
                  />

                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-form-label message-label w-input"
                    id="contact-message"
                    name="message"
                    placeholder="Your Message*"
                    required
                  />

                  <input
                    type="submit"
                    className="black-button extra-large w-button"
                    value="Submit "
                  />
                </form>

                {/* kept for compatibility */}
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
