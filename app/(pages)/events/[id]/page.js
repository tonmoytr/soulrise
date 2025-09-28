// app/events/[id]/page.jsx
import { notFound } from "next/navigation";
import { getAllEventIds, getEventById } from "../../../data/events";

export function generateStaticParams() {
  return getAllEventIds().map((id) => ({ id }));
}

// Works now; if you later move to a Next version where params is a Promise,
// we can switch to `const { id } = use(params)` without changing anything else.
export default function EventPage({ params }) {
  const { id } = params;
  const ev = getEventById(id);
  if (!ev) notFound();

  const when = ev.dateISO ? new Date(ev.dateISO) : null;

  return (
    <div className="evp">
      <div className="evp__wrap">
        <a className="evp__back" href="/events">
          &larr; Back to events
        </a>

        <div className="evp__meta">
          {(ev.dateDay || ev.dateMonth) && (
            <span className="evp__chip">
              {ev.dateDay} {ev.dateMonth}
            </span>
          )}
          {ev.location && <span className="evp__chip">{ev.location}</span>}
          {when && <span className="evp__chip">{when.toLocaleString()}</span>}
        </div>

        <h1 className="evp__title">{ev.title}</h1>
        {ev.excerpt && <p className="evp__excerpt">{ev.excerpt}</p>}

        <img className="evp__hero" src={ev.image} alt={ev.title} />

        <div className="evp__grid">
          <div>
            <section className="evp__card">
              <h2 className="evp__h2">About this event</h2>
              <div
                className="evp__body"
                dangerouslySetInnerHTML={{
                  __html: ev.content || "<p>Details coming soon.</p>",
                }}
              />
            </section>
          </div>

          <aside>
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

            {(ev.location || when) && (
              <section className="evp__card">
                <h3 className="evp__h3">When & Where</h3>
                {when && <p className="evp__muted">{when.toLocaleString()}</p>}
                {ev.location && <p className="evp__muted">{ev.location}</p>}
              </section>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
