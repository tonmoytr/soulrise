// app/components/.../VolunteerForm.jsx
"use client";

import { useCallback, useEffect, useState } from "react";

export default function VolunteerForm({
  subtitle = "Help The People With us",
  title = "Need Your Heartful Help",
  paras = [
    "The single funds allow you to advise a smaller number of grants, on a schedule or as desired to charitable organization, cause, country, or region.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  ],
  steps = [
    {
      no: "01",
      h: "Create a personal profile",
      p: "We aspire to be like helpers. So we serve all people. No matter their religion, ethnicity, or gender.",
    },
    {
      no: "02",
      h: "Add your organization",
      p: "Going after poverty’s symptoms is temporary. Going after its causes is permanent for everyone.",
    },
    {
      no: "03",
      h: "Add volunteer opportunities",
      p: "In an effort to ensure volunteering at Foundation events is fulfilling experience for you.",
    },
    {
      no: "04",
      h: "You are ready to recruit!",
      p: "Doing the most good is hard. We recommend some of the best charities in the world.",
      last: true,
    },
  ],
  cta = { label: "Get Started", href: "/causes" },
  formAction = "#",
}) {
  const [showToast, setShowToast] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  // auto-hide toast
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(t);
  }, [showToast]);

  // Phone: keep only digits
  const onPhoneChange = useCallback((e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setPhoneValue(digitsOnly);
  }, []);

  // Prevent non-digits being typed
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

    // Native validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // If you later POST to an API, do it here. On success:
    form.reset();
    setPhoneValue("");
    setShowToast(true); // top-right toast
  }, []);

  return (
    <section className="volunteer-form" data-component="VolunteerForm">
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
          ✅ Your kindness is a gift to the world
        </div>
      )}

      <div className="container w-container">
        <div className="w-layout-grid volunteer-grid">
          {/* LEFT: copy + steps */}
          <div className="voluteer-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">{subtitle}</p>
              <h2 className="section-title">{title}</h2>
              {paras.map((t, i) => (
                <p key={i} className="section-content">
                  {t}
                </p>
              ))}
            </div>

            <div className="volunteer-valid-points-wrap">
              {steps.map((s, i) => (
                <div key={i} className="volunteer-points-flex">
                  <div className="valid-points-count-flex">
                    <h3 className="valid-points-count">{s.no}</h3>
                  </div>
                  <div
                    className={`valid-points-content-wrap${
                      s.last ? " last-point" : ""
                    }`}
                  >
                    <div className="section-title-wrap">
                      <h4 className="points-heading">{s.h}</h4>
                      <p className="points-content">{s.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="volunteer-button-wrap volunteer-page">
              <a href={cta.href} className="white-button large w-button">
                {cta.label}
              </a>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="volunteer-form-content">
            <div className="volunteer-form-flex">
              <div className="volunteer-form-title">
                <h4 className="volunteer-title">Complete the Form</h4>
                <p className="volunteer-sub-title">
                  Fill Form and Become Volunteer in Humanity
                </p>
              </div>

              <div className="w-form">
                <form
                  method="get"
                  action={formAction}
                  className="volunteer-page-form"
                  noValidate
                  onSubmit={onSubmit}
                >
                  <label
                    htmlFor="vol-name"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="vol-name"
                    className="volunteer-form-label w-input"
                    name="name"
                    placeholder="Enter Your Name*"
                    type="text"
                    required
                  />

                  <label
                    htmlFor="vol-phone"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="vol-phone"
                    className="volunteer-form-label w-input"
                    name="phone"
                    placeholder="Phone Number*"
                    type="tel"
                    inputMode="numeric"
                    pattern="^\d{6,15}$"
                    title="Please enter digits only (6–15)."
                    value={phoneValue}
                    onChange={onPhoneChange}
                    onKeyDown={onPhoneKeyDown}
                    required
                  />

                  <label
                    htmlFor="vol-email"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="vol-email"
                    className="volunteer-form-label w-input"
                    name="email"
                    placeholder="Email Address*"
                    type="email"
                    required
                  />

                  <label
                    htmlFor="vol-address"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    Address
                  </label>
                  <input
                    id="vol-address"
                    className="volunteer-form-label w-input"
                    name="address"
                    placeholder="Address*"
                    type="text"
                    required
                  />

                  <label
                    htmlFor="vol-occupation"
                    style={{
                      display: "block",
                      fontWeight: 600,
                      margin: "10px 0 6px",
                    }}
                  >
                    About Occupation
                  </label>
                  <textarea
                    id="vol-occupation"
                    className="volunteer-form-label volunteer-message-box w-input"
                    name="occupation"
                    placeholder="About Occupation*"
                    maxLength={5000}
                    required
                  />

                  <input
                    type="submit"
                    className="black-button extra-large w-button"
                    value="Submit "
                  />
                </form>

                {/* keep these for your existing CSS/messages */}
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
