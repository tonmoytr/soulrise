// app/(pages)/events/page.js
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import { events as EVENTS } from "../../data/events";

function safeDate(iso) {
  try {
    return iso ? new Date(iso).toLocaleString() : "";
  } catch {
    return "";
  }
}

export default function EventsPage() {
  const items = Array.isArray(EVENTS) ? EVENTS : [];

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="evl container">
        <div className="evl__wrap">
          <header className="evl__head">
            <h1 className="evl__title">Our Campaigns</h1>
            <p className="evl__subtitle">
              See what’s happening next and join us on the ground.
            </p>
          </header>

          <section className="evl__grid" aria-label="Events list">
            {items.map((ev) => (
              <article key={ev.id} className="evl-card">
                <a
                  href={`/events/${ev.id}`}
                  className="evl-card__link"
                  aria-label={`Open event ${ev.title}`}
                ></a>

                <div className="evl-card__media">
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                  {(ev.dateDay || ev.dateMonth) && (
                    <div className="evl-badge">
                      <span className="evl-badge__day">{ev.dateDay || ""}</span>
                      <span className="evl-badge__month">
                        {ev.dateMonth || ""}
                      </span>
                    </div>
                  )}
                </div>

                <div className="evl-card__body">
                  <h2 className="evl-card__title">
                    <a
                      href={`/events/${ev.id}`}
                      className="evl-card__title-link"
                    >
                      {ev.title}
                    </a>
                  </h2>

                  {ev.excerpt && (
                    <p className="evl-card__excerpt">{ev.excerpt}</p>
                  )}

                  <ul className="evl-meta">
                    {ev.organizer && (
                      <li className="evl-meta__item">
                        <span className="evl-meta__label">Organizer:</span>{" "}
                        {ev.organizer}
                      </li>
                    )}
                    {(ev.location || ev.venue) && (
                      <li className="evl-meta__item">
                        <span className="evl-meta__label">Where:</span>{" "}
                        {ev.venue ? `${ev.venue}, ` : ""}
                        {ev.location || ""}
                      </li>
                    )}
                    {ev.dateISO && (
                      <li className="evl-meta__item">
                        <span className="evl-meta__label">When:</span>{" "}
                        {safeDate(ev.dateISO)}
                      </li>
                    )}
                  </ul>

                  {/* Optional: capacity/registration info if provided */}
                  {ev?.tickets?.capacity > 0 && (
                    <div className="evl-cap">
                      <div
                        className="evl-cap__bar"
                        role="progressbar"
                        aria-valuenow={Math.min(
                          Math.round(
                            ((ev.tickets.seatsBooked || 0) /
                              ev.tickets.capacity) *
                              100
                          ),
                          100
                        )}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <i
                          style={{
                            width: `${Math.min(
                              Math.round(
                                ((ev.tickets.seatsBooked || 0) /
                                  ev.tickets.capacity) *
                                  100
                              ),
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="evl-cap__label">
                        {Math.min(
                          ev.tickets.seatsBooked || 0,
                          ev.tickets.capacity
                        )}{" "}
                        of {ev.tickets.capacity} seats booked
                      </div>
                    </div>
                  )}

                  {Array.isArray(ev.tags) && ev.tags.length > 0 && (
                    <div className="evl-tags">
                      {ev.tags.slice(0, 4).map((t) => (
                        <span key={t} className="evl-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
