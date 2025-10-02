// app/causes/[slug]/page.jsx
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCauseSlugs, getCauseBySlug } from "../../../data/causes";

export function generateStaticParams() {
  return getAllCauseSlugs().map((slug) => ({ slug }));
}

function money(n, c = "USD") {
  try {
    return Number(n).toLocaleString("en-US", {
      style: "currency",
      currency: c,
      maximumFractionDigits: 0,
    });
  } catch {
    return `$${n}`;
  }
}

export default function CausePage({ params }) {
  const { slug } = params;
  const cause = getCauseBySlug(slug);
  if (!cause) notFound();

  const goal = cause.goalAmount ?? 0;
  const raised = Math.min(cause.raisedAmount ?? 0, goal || Infinity);
  const pct = Math.min(Math.round((raised / Math.max(goal, 1)) * 100), 100);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="clc-root container">
        <div className="clc-wrap">
          {/* Breadcrumb */}
          <div className="clc-breadcrumb">
            <Link href="/causes">&larr; Back to all causes</Link>
          </div>

          {/* Meta & Title */}
          <div className="clc-meta">
            <span className="clc-chip">{cause.category}</span>
            <span className="clc-chip">{cause.location}</span>
            <span
              className="clc-chip"
              style={{
                background:
                  cause.urgency === "Critical"
                    ? "#ffe3e3"
                    : cause.urgency === "High"
                    ? "#fff6cf"
                    : "#e7f5ff",
                color:
                  cause.urgency === "Critical"
                    ? "#e03131"
                    : cause.urgency === "High"
                    ? "#9b6b00"
                    : "#0b7285",
                borderColor:
                  cause.urgency === "Critical"
                    ? "#ffd1d1"
                    : cause.urgency === "High"
                    ? "#ffeaa0"
                    : "#d0ebff",
              }}
            >
              {cause.urgency}
            </span>
          </div>

          {/* Hero image */}
          <img src={cause.image} alt={cause.title} className="clc-hero" />
          <h1 className="clc-title">{cause.title}</h1>
          <p className="clc-excerpt">{cause.excerpt}</p>

          {/* Grid */}
          <div className="clc-grid">
            {/* Left column */}
            <div>
              {/* Progress card */}
              <div className="clc-card">
                <div className="clc-muted-row">Funding progress</div>
                <div
                  className="clc-progress"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={pct}
                  aria-label="Funding progress"
                >
                  <i style={{ width: `${pct}%` }} />
                </div>
                <div className="clc-raised-goal">
                  <div>
                    <div className="clc-muted-row">Raised</div>
                    <div className="num">{money(raised)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="clc-muted-row">Goal</div>
                    <div className="num">{money(goal)}</div>
                  </div>
                </div>
                <div className="clc-muted-row" style={{ marginTop: 6 }}>
                  {cause.donors} donors • {cause.beneficiaries}+ beneficiaries •
                  Last updated:{" "}
                  {new Date(cause.lastUpdated).toLocaleDateString()}
                </div>
              </div>

              {/* Story */}
              <div className="clc-card">
                <h2 className="clc-h2">The Story</h2>
                <div
                  className="clc-body"
                  dangerouslySetInnerHTML={{ __html: cause.content }}
                />
              </div>

              {/* Impact */}
              {cause.impact?.length > 0 && (
                <div className="clc-card">
                  <h2 className="clc-h2">Expected Impact</h2>
                  <ul className="clc-list">
                    {cause.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {cause.gallery?.length > 0 && (
                <div className="clc-card">
                  <h2 className="clc-h2">Gallery</h2>
                  <div className="clc-gallery">
                    {cause.gallery.map((g, i) => (
                      <img key={i} src={g} alt={`${cause.title} ${i + 1}`} />
                    ))}
                  </div>
                </div>
              )}

              {/* Updates */}
              {cause.updates?.length > 0 && (
                <div className="clc-card">
                  <h2 className="clc-h2">Project Updates</h2>
                  <div>
                    {cause.updates.map((u, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "10px 0",
                          borderTop: i ? "1px solid var(--clc-border)" : "none",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 12,
                          }}
                        >
                          <strong>{u.title}</strong>
                          <span className="clc-muted-row">
                            {new Date(u.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p style={{ margin: "6px 0 0" }}>{u.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ (details/summary → no JS) */}
              {cause.faq?.length > 0 && (
                <div className="clc-card">
                  <h2 className="clc-h2">FAQ</h2>
                  <div className="clc-accordion">
                    {cause.faq.map((f, i) => (
                      <details key={i}>
                        <summary>{f.q}</summary>
                        <div style={{ marginTop: 8, color: "#37495b" }}>
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Transparency */}
              {cause.transparency?.length > 0 && (
                <div className="clc-card">
                  <h2 className="clc-h2">Transparency</h2>
                  <ul className="clc-list">
                    {cause.transparency.map((t, i) => (
                      <li key={i}>
                        <strong>{t.label}:</strong> {t.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right column (sidebar) */}
            <aside>
              {/* Donate */}
              {/* <div className="clc-card clc-side-card clc-donate">
                <h3>Support this cause</h3>
                <div className="clc-muted-row">Choose an amount</div>
                <div className="clc-amounts" style={{ marginTop: 8 }}>
                  {cause.donationOptions?.map((amt) => (
                    <button key={amt} type="button" className="clc-pill">
                      {money(amt)}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  <label
                    htmlFor="customAmount"
                    className="clc-muted-row"
                    style={{ display: "block", marginBottom: 6 }}
                  >
                    Custom amount
                  </label>
                  <div className="clc-input">
                    <span>$</span>
                    <input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {cause.recurring?.suggestedMonthly?.length > 0 && (
                  <div style={{ marginTop: 12 }}>
                    <label className="clc-switch">
                      <input type="checkbox" /> Make this a monthly gift
                    </label>
                    <div className="clc-amounts">
                      {cause.recurring.suggestedMonthly.map((m) => (
                        <button key={m} type="button" className="clc-pill">
                          {money(m)}/mo
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="clc-btn"
                  style={{ marginTop: 14 }}
                >
                  Donate Now
                </button>
                <div className="clc-muted-row" style={{ marginTop: 8 }}>
                  Secure payment • Instant receipt
                </div>
              </div> */}

              {/* Organizer */}
              {/* <div className="clc-card clc-side-card clc-organizer">
                <div
                  className="clc-muted-row"
                  style={{ textTransform: "uppercase", letterSpacing: ".04em" }}
                >
                  Organizer
                </div>
                <div className="name">{cause.organizer?.name}</div>
                {cause.organizer?.email && (
                  <div className="clc-muted-row">
                    <a href={`mailto:${cause.organizer.email}`}>
                      {cause.organizer.email}
                    </a>
                  </div>
                )}
                {cause.organizer?.phone && (
                  <div className="clc-muted-row">{cause.organizer.phone}</div>
                )}
              </div> */}

              {/* Share */}
              {/* <div className="clc-card clc-side-card">
                <div
                  className="clc-muted-row"
                  style={{ textTransform: "uppercase", letterSpacing: ".04em" }}
                >
                  Share
                </div>
                <div className="clc-share" style={{ marginTop: 8 }}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      cause.href
                    )}`}
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                      cause.href
                    )}&text=${encodeURIComponent(cause.title)}`}
                    target="_blank"
                  >
                    X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      cause.href
                    )}`}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div> */}
            </aside>
          </div>

          {/* Tags */}
          {cause.tags?.length > 0 && (
            <div className="clc-tags">
              {cause.tags.map((t) => (
                <span key={t} className="clc-tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
