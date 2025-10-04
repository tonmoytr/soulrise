// app/(pages)/campaigns/page.js
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import { causes as CAUSES } from "../../data/causes"; // corrected path

function safeDate(iso) {
  try {
    return iso ? new Date(iso).toLocaleDateString() : "";
  } catch {
    return "";
  }
}
function money(n) {
  const v = Number(n);
  return Number.isFinite(v)
    ? v.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })
    : "$0";
}

export default function CampaignsPage() {
  const items = Array.isArray(CAUSES) ? CAUSES : [];

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="evl container">
        <div className="evl__wrap">
          <header className="evl__head">
            <h1 className="evl__title">Our Campaigns</h1>
            <p className="evl__subtitle">
              Choose a campaign to support — every contribution moves it closer
              to the goal.
            </p>
          </header>

          <section className="evl__grid" aria-label="Campaigns list">
            {items.map((c) => {
              const href = c.href || `/campaigns/${c.slug}`;
              const organizerName = c.organizer?.name || "SoulRise";
              const goal = Number(c.goalAmount) || 0;
              const raised = Math.min(
                Number(c.raisedAmount) || 0,
                goal || Infinity
              );
              const pct =
                goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0;

              return (
                <article key={c.slug} className="evl-card">
                  <a
                    href={href}
                    className="evl-card__link"
                    aria-label={`Open campaign ${c.title}`}
                  ></a>

                  <div className="evl-card__media">
                    <img src={c.image} alt={c.title} loading="lazy" />
                    {(c.urgency || c.category) && (
                      <div className="evl-badge">
                        <span className="evl-badge__day">
                          {c.urgency || ""}
                        </span>
                        <span className="evl-badge__month">
                          {c.category || ""}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="evl-card__body">
                    <h2 className="evl-card__title">
                      <a href={href} className="evl-card__title-link">
                        {c.title}
                      </a>
                    </h2>

                    {c.excerpt && (
                      <p className="evl-card__excerpt">{c.excerpt}</p>
                    )}

                    <ul className="evl-meta">
                      {organizerName && (
                        <li className="evl-meta__item">
                          <span className="evl-meta__label">Organizer:</span>{" "}
                          {organizerName}
                        </li>
                      )}
                      {c.location && (
                        <li className="evl-meta__item">
                          <span className="evl-meta__label">Where:</span>{" "}
                          {c.location}
                        </li>
                      )}
                      {(c.startDate || c.endDate || c.lastUpdated) && (
                        <li className="evl-meta__item">
                          <span className="evl-meta__label">When:</span>{" "}
                          {c.startDate && c.endDate
                            ? `${safeDate(c.startDate)} – ${safeDate(
                                c.endDate
                              )}`
                            : c.lastUpdated
                            ? `Updated ${safeDate(c.lastUpdated)}`
                            : ""}
                        </li>
                      )}
                    </ul>

                    {goal > 0 && (
                      <div className="evl-cap">
                        <div
                          className="evl-cap__bar"
                          role="progressbar"
                          aria-valuenow={pct}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <i style={{ width: `${pct}%` }} />
                        </div>
                        <div className="evl-cap__label">
                          {money(raised)} raised of {money(goal)} ({pct}%)
                        </div>
                      </div>
                    )}

                    {Array.isArray(c.tags) && c.tags.length > 0 && (
                      <div className="evl-tags">
                        {c.tags.slice(0, 4).map((t) => (
                          <span key={t} className="evl-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
