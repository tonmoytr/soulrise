// components/team/TeamGrid.jsx
"use client";

const TEAM = [
  {
    name: "Martin Luther",
    img: "/assets/images/team/1.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
      pi: "https://www.pinterest.com",
    },
  },
  {
    name: "Michelle Ray",
    img: "/assets/images/team/9.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
    },
  },
  {
    name: "Jack Sparrow",
    img: "/assets/images/team/3.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
      pi: "https://www.pinterest.com",
    },
  },
  {
    name: "David Smith",
    img: "/assets/images/team/4.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
    },
  },
  {
    name: "Jason Roy",
    img: "/assets/images/team/10.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
    },
  },
  {
    name: "Lily Brown",
    img: "/assets/images/team/6.jpg",
    socials: {
      ig: "https://www.instagram.com",
      fb: "https://www.facebook.com",
      tw: "https://www.twitter.com",
    },
  },
];

const Social = ({ href, src, alt }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="team-social-icon-wrap w-inline-block"
    >
      <img src={src} loading="lazy" alt={alt} />
    </a>
  ) : null;

export default function TeamGrid() {
  return (
    <section className="team-section">
      <div className="container w-container">
        <div className="teams-portfolio-wrap">
          <div className="w-layout-grid team-grid team-page">
            {TEAM.map((m, i) => (
              <div className="team-card-wrap" key={i}>
                <div className="team-member-image-warp">
                  <img className="team-member-image" src={m.img} alt={m.name} />
                </div>

                <div className="team-card-content-wrap">
                  <div className="team-heading-content">
                    <h2 className="team-member-heading">{m.name}</h2>
                  </div>

                  <div className="portfolio-social-link-flex">
                    <Social
                      href={m.socials?.ig}
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c2186940f2fb_Black%20Socila%20Icon%201.svg"
                      alt="Instagram"
                    />
                    <Social
                      href={m.socials?.fb}
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c27b4e40f2fa_Black%20Socila%20Icon%202.svg"
                      alt="Facebook"
                    />
                    <Social
                      href={m.socials?.tw}
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ec70b9a06d8003aecff53_testimonial-social-03.svg"
                      alt="Twitter"
                    />
                    <Social
                      href={m.socials?.pi}
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f5fa2596c24ae740f2fd_Black%20Socila%20Icon%204.svg"
                      alt="Pinterest"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
