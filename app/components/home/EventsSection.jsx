"use client";
import Link from "next/link";

const featured = {
  href: "/events",
  img: "/assets/images/homepage/5.jpg",
  day: "30",
  month: "July",
  organizer: "Nattasha",
  time: "10:00 AM - 18:00 PM, Everyday",
  title: "Education for Poor Children",
  location: "Dark Spurt, San Francisco, CA 94528",
};

const list = [
  {
    href: "/events",
    day: "30",
    month: "July",
    organizer: "David James",
    title: "Education for Poor Children",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
  },
  {
    href: "/events",
    day: "26",
    month: "July",
    organizer: "David James",
    title: "Healthy Food for Growing",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
  },
  {
    href: "/events",
    day: "22",
    month: "July",
    organizer: "David James",
    title: "New Cloths Coming",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
  },
];

const ICON_TIME =
  "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b69a5a4a3197334026a15b_event-time-icon.svg";
const ICON_MAP =
  "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b69a5a2f009111caf13302_event-map-icon.svg";

export default function EventsSection() {
  return (
    <section className="events-section">
      <div className="container w-container">
        {/* Title row */}
        <div className="event-title-wrap">
          <div className="section-title-wrap">
            <p className="sub-title pink">Our Events</p>
            <h2 className="section-title">
              Join Upcoming Events
              <br />
              and Webinars
            </h2>
          </div>
          <Link href="/events" className="button large w-button">
            More Events
          </Link>
        </div>

        {/* Content grid */}
        <div className="event-content-wrap">
          <div className="w-layout-grid event-grid">
            {/* LEFT — featured event (image + overlay date + meta rows) */}
            <div className="event-content-area">
              <div className="event-item">
                <div className="event-content-flex">
                  <Link
                    href={featured.href}
                    className="event-image-wrap w-inline-block"
                  >
                    <img
                      className="event-image"
                      src={featured.img}
                      alt="Image For Group of Children"
                      loading="lazy"
                    />
                  </Link>
                  <div className="event-date-wrap pink">
                    <h2 className="event-date">{featured.day}</h2>
                    <h3 className="event-month">{featured.month}</h3>
                  </div>
                </div>

                <div className="event-organized-wrap">
                  <div className="event-organizer">
                    <p className="event-organized-author">
                      Organized By :
                      <Link
                        href="/organizer/david-james"
                        className="author-link"
                      >
                        {featured.organizer}
                      </Link>
                    </p>
                  </div>
                  <div className="event-timing">
                    <img src={ICON_TIME} alt="Clock icon" loading="lazy" />
                    <p className="event-timing-content">{featured.time}</p>
                  </div>
                </div>

                <div className="section-title-wrap">
                  <Link href={featured.href} className="event-title">
                    {featured.title}
                  </Link>
                </div>

                <div className="event-location">
                  <img src={ICON_MAP} alt="Map icon" loading="lazy" />
                  <p className="event-location-content">{featured.location}</p>
                </div>
              </div>
            </div>

            {/* RIGHT — 3 stacked cards */}
            <div className="event-content-area">
              <div className="event-collection-list-wrap w-dyn-list">
                <div role="list" className="event-collection-list w-dyn-items">
                  {list.map((ev) => (
                    <div
                      key={ev.href}
                      role="listitem"
                      className="event-collection-item w-dyn-item"
                    >
                      <div className="event-card-flex">
                        <div className="event-date-wrap card">
                          <h2 className="event-date">{ev.day}</h2>
                          <h3 className="event-month">{ev.month}</h3>
                        </div>

                        <div className="event-card-content-wrap">
                          <div className="event-card-content-flex">
                            <p className="event-card-content">
                              Organized By :&nbsp;
                            </p>
                            <Link
                              href="/organizer/david-james"
                              className="author-link"
                            >
                              {ev.organizer}
                            </Link>
                          </div>
                          <Link href={ev.href} className="event-card-title">
                            {ev.title}
                          </Link>
                          <p>{ev.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* /RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
}
