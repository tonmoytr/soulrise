// app/(pages)/events/[id]/page.js
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEventIds, getEventById } from "../../../data/events";

export function generateStaticParams() {
  return getAllEventIds().map((id) => ({ id }));
}
export const dynamicParams = true;

function money(n, c = "USD") {
  const v = Number(n);
  return Number.isFinite(v)
    ? v.toLocaleString("en-US", {
        style: "currency",
        currency: c,
        maximumFractionDigits: 0,
      })
    : "$0";
}

export default function EventPage({ params }) {
  const { id } = params;
  const ev = getEventById(id);
  if (!ev) return notFound();

  const when = ev.dateISO ? new Date(ev.dateISO) : null;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const cap = ev.tickets?.capacity ?? 0;
  const booked = Math.min(ev.tickets?.seatsBooked ?? 0, cap || Infinity);
  const seatPct = cap > 0 ? Math.min(Math.round((booked / cap) * 100), 100) : 0;

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="evp">
        <div className="evp__wrap">
          <Link className="evp__back" href="/events">
            &larr; Back to events
          </Link>

          <div className="evp__meta">
            {(ev.dateDay || ev.dateMonth) && (
              <span className="evp__chip">
                {ev.dateDay} {ev.dateMonth}
              </span>
            )}
            {when && (
              <span className="evp__chip">
                {when.toLocaleString()} ({tz})
              </span>
            )}
            {ev.location && <span className="evp__chip">{ev.location}</span>}
            {ev.languages?.length ? (
              <span className="evp__chip">{ev.languages.join(", ")}</span>
            ) : null}
          </div>

          <h1 className="evp__title">{ev.title}</h1>
          {ev.excerpt && <p className="evp__excerpt">{ev.excerpt}</p>}

          <img className="evp__hero" src={ev.image} alt={ev.title} />

          <div className="evp__grid">
            {/* Main column */}
            <div>
              {/* About */}
              <section className="evp__card">
                <h2 className="evp__h2">About this event</h2>
                <div
                  className="evp__body"
                  dangerouslySetInnerHTML={{
                    __html: ev.content || "<p>Details coming soon.</p>",
                  }}
                />
                {ev.accessibility?.length ? (
                  <p className="evp__muted">
                    Accessibility: {ev.accessibility.join(", ")}
                  </p>
                ) : null}
                <p className="evp__muted">
                  Last updated:{" "}
                  {ev.lastUpdated
                    ? new Date(ev.lastUpdated).toLocaleDateString()
                    : "—"}
                </p>
              </section>

              {/* Schedule */}
              {Array.isArray(ev.schedule) && ev.schedule.length > 0 && (
                <section className="evp__card">
                  <h2 className="evp__h2">Schedule</h2>
                  <ul className="evp-tl">
                    {ev.schedule.map((s, i) => (
                      <li key={i} className="evp-tl__item">
                        <div className="evp-tl__time">
                          {s.start} {s.end ? `– ${s.end}` : ""}
                        </div>
                        <div className="evp-tl__info">
                          <div className="evp-tl__title">{s.title}</div>
                          {s.speakerId && (
                            <div className="evp-tl__speaker">
                              {ev.speakers?.find((sp) => sp.id === s.speakerId)
                                ?.name || ""}
                            </div>
                          )}
                          {s.description ? (
                            <div className="evp-tl__desc">{s.description}</div>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Speakers */}
              {Array.isArray(ev.speakers) && ev.speakers.length > 0 && (
                <section className="evp__card">
                  <h2 className="evp__h2">Speakers</h2>
                  <div className="evp-speakers">
                    {ev.speakers.map((sp) => (
                      <article key={sp.id} className="evp-sp">
                        <img
                          className="evp-sp__avatar"
                          src={sp.avatar}
                          alt={sp.name}
                        />
                        <div className="evp-sp__body">
                          <div className="evp-sp__name">{sp.name}</div>
                          {sp.role && (
                            <div className="evp-sp__role">{sp.role}</div>
                          )}
                          {sp.bio && <p className="evp-sp__bio">{sp.bio}</p>}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* Gallery */}
              {Array.isArray(ev.gallery) && ev.gallery.length > 0 && (
                <section className="evp__card">
                  <h2 className="evp__h2">Gallery</h2>
                  <div className="evp-gallery">
                    {ev.gallery.map((g, i) => (
                      <img key={i} src={g} alt={`${ev.title} ${i + 1}`} />
                    ))}
                  </div>
                </section>
              )}

              {/* Updates */}
              {Array.isArray(ev.updates) && ev.updates.length > 0 && (
                <section className="evp__card">
                  <h2 className="evp__h2">Updates</h2>
                  <div>
                    {ev.updates.map((u, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "10px 0",
                          borderTop: i ? "1px solid var(--evp-border)" : "none",
                        }}
                      >
                        <div className="evp-upd">
                          <strong>{u.title}</strong>
                          <span className="evp__muted">
                            {u.date
                              ? new Date(u.date).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                        <p style={{ margin: "6px 0 0" }}>{u.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              {Array.isArray(ev.faq) && ev.faq.length > 0 && (
                <section className="evp__card">
                  <h2 className="evp__h2">FAQ</h2>
                  <div className="evp-acc">
                    {ev.faq.map((f, i) => (
                      <details key={i}>
                        <summary>{f.q}</summary>
                        <div>{f.a}</div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Tags & Sponsors */}
              {(ev.tags?.length || ev.sponsors?.length) && (
                <section className="evp__card">
                  <div className="evp-tags">
                    {ev.tags?.map((t) => (
                      <span key={t} className="evp-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {ev.sponsors?.length ? (
                    <div className="evp-sponsors">
                      {ev.sponsors.map((s, i) => (
                        <a key={i} href={s.url || "#"} className="evp-spon">
                          <img src={s.logo} alt={s.name} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside>
              {/* Tickets */}
              <section className="evp__card">
                <h3 className="evp__h3">Register / Tickets</h3>

                {cap > 0 ? (
                  <>
                    <div
                      className="evp-prog"
                      role="progressbar"
                      aria-valuenow={seatPct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <i style={{ width: `${seatPct}%` }} />
                    </div>
                    <div className="evp__muted" style={{ marginTop: 6 }}>
                      {booked} of {cap} seats booked ({seatPct}%)
                    </div>
                  </>
                ) : null}

                <ul className="evp-tiers">
                  {(ev.tickets?.tiers || []).map((t, i) => (
                    <li key={i} className="evp-tier">
                      <div className="evp-tier__top">
                        <strong>{t.name}</strong>
                        <span>
                          {money(t.price, ev.tickets?.currency || "USD")}
                        </span>
                      </div>
                      {t.includes?.length ? (
                        <ul className="evp-tier__inc">
                          {t.includes.map((inc, k) => (
                            <li key={k}>{inc}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <a
                  href={ev.tickets?.registrationUrl || "#"}
                  className="evp-btn"
                >
                  Register Now
                </a>
              </section>

              {/* When & Where */}
              {(when || ev.venue || ev.address || ev.location) && (
                <section className="evp__card">
                  <h3 className="evp__h3">When & Where</h3>
                  {when && (
                    <p className="evp__muted">
                      {when.toLocaleString()} ({tz})
                    </p>
                  )}
                  {ev.venue && <p className="evp__muted">{ev.venue}</p>}
                  {ev.address && <p className="evp__muted">{ev.address}</p>}
                  {ev.location && <p className="evp__muted">{ev.location}</p>}
                  {ev.mapEmbedUrl ? (
                    <div className="evp-map">
                      <iframe
                        src={ev.mapEmbedUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map"
                      />
                    </div>
                  ) : null}
                </section>
              )}

              {/* Organizer */}
              <section className="evp__card">
                <h3 className="evp__h3">Organizer</h3>
                <p className="evp__muted">
                  {ev.organizerUrl ? (
                    <a href={ev.organizerUrl}>{ev.organizer}</a>
                  ) : (
                    ev.organizer
                  )}
                </p>
              </section>

              {/* Share */}
              <section className="evp__card">
                <h3 className="evp__h3">Share</h3>
                <div className="evp-share">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `/events/${ev.id}`
                    )}`}
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                      `/events/${ev.id}`
                    )}&text=${encodeURIComponent(ev.title)}`}
                    target="_blank"
                  >
                    X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `/events/${ev.id}`
                    )}`}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
