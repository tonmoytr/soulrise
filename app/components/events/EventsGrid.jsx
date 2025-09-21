export default function EventsGrid({ items = [] }) {
  return (
    <section className="sr-ev">
      <div className="container w-container">
        <div className="sr-ev__grid">
          {items.map((ev, i) => (
            <article key={ev.id || i} className="sr-ev__item">
              {/* image + date badge */}
              <div className="sr-ev__media">
                <img
                  className="sr-ev__img"
                  src={ev.image}
                  alt={ev.title}
                  loading="lazy"
                />
                {(ev.dateDay || ev.dateMonth) && (
                  <div className="sr-ev__date">
                    <span className="sr-ev__day">{ev.dateDay}</span>
                    <span className="sr-ev__month">{ev.dateMonth}</span>
                  </div>
                )}
              </div>

              {/* meta */}
              {(ev.organizer || ev.organizerUrl) && (
                <p className="sr-ev__meta">
                  Organized By :{" "}
                  {ev.organizerUrl ? (
                    <a className="sr-ev__org" href={ev.organizerUrl}>
                      {ev.organizer}
                    </a>
                  ) : (
                    <span className="sr-ev__org">{ev.organizer}</span>
                  )}
                </p>
              )}

              <hr className="sr-ev__rule" />

              {/* title + excerpt */}
              <h3 className="sr-ev__title">
                <a href={`/events/${ev.id || i}`} className="sr-ev__title-link">
                  {ev.title}
                </a>
              </h3>
              {ev.excerpt && <p className="sr-ev__excerpt">{ev.excerpt}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
