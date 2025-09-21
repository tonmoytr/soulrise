export default function TeamSection() {
  const people = [
    {
      name: "Martin Luther",
      img: "/assets/images/team/1.jpg",
    },
    {
      name: "Keira Knightley",
      img: "/assets/images/team/5.jpg",
    },
    {
      name: "Jack Sparrow",
      img: "/assets/images/team/3.jpg",
    },
  ];

  const socials = {
    ig: "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c2186940f2fb_Black%20Socila%20Icon%201.svg",
    fb: "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c27b4e40f2fa_Black%20Socila%20Icon%202.svg",
    tw: "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ec70b9a06d8003aecff53_testimonial-social-03.svg",
    pi: "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c24ae740f2fd_Black%20Socila%20Icon%204.svg",
  };

  return (
    <section className="team-section">
      <div className="container w-container">
        <div className="team-section-title-wrap">
          <div className="section-title-wrap">
            <p className="sub-title pink">The team</p>
            <h2 className="section-title">Meet Our Volunteers</h2>
          </div>
        </div>

        <div className="team-grid">
          {/* 3 Member cards */}
          {people.map((p) => (
            <div className="team-card" key={p.name}>
              <div className="team-image-wrap">
                <img
                  className="team-image"
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">{p.name}</h3>
              <div className="team-socials">
                <a className="social" href="#" aria-label="Instagram">
                  <img src={socials.ig} alt="" />
                </a>
                <a className="social" href="#" aria-label="Facebook">
                  <img src={socials.fb} alt="" />
                </a>
                <a className="social" href="#" aria-label="Twitter/X">
                  <img src={socials.tw} alt="" />
                </a>
                <a className="social" href="#" aria-label="Pinterest">
                  <img src={socials.pi} alt="" />
                </a>
              </div>
            </div>
          ))}

          {/* CTA panel (right) */}
          <aside className="team-cta">
            <div className="team-cta-icon">
              <span className="hand" />
            </div>
            <h3 className="team-cta-title">
              Become
              <br />a Volunteer
            </h3>
            <p className="team-cta-text">
              Centuries but also the leap electtype setting, remaining
            </p>
            <a href="/volunteer" className="cta-button">
              Join Us Today
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
