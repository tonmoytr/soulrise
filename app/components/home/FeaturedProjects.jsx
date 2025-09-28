import Link from "next/link";

const tiles = [
  {
    href: "/project",
    img: "/assets/images/homepage/11.jpg",
    title: "Make People Believe in Cause",
    tags: ["Education", "Health"],
    cls: "tile-a",
  },
  {
    href: "/project",
    img: "/assets/images/homepage/14.jpg",
    title: "Child Portrait",
    tags: ["Children", "Care"],
    cls: "tile-b",
  },
  {
    href: "/project",
    img: "/assets/images/homepage/12.jpg",
    title: "Hope & Smiles",
    tags: ["People", "Community"],
    cls: "tile-c",
  },
  {
    href: "/project",
    img: "/assets/images/homepage/13.jpg",
    title: "Provides Full Freedom To Women",
    tags: ["Women", "Freedom"],
    cls: "tile-d",
  },
  {
    href: "/project",
    img: "/assets/images/homepage/6.jpg",
    title: "Joy Together",
    tags: ["Community", "Youth"],
    cls: "tile-e",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="project-section">
      {/* full-bleed grid (no .w-container here) */}
      <div className="project-mosaic-grid">
        {/* LEFT intro tile */}
        <div className="project-intro-tile">
          <p className="sub-title pink">What we did</p>
          <h2 className="section-title white">Featured Projects</h2>
          <p className="section-content white">
            Join us in the fight against poverty! By becoming a Champion for the
            poor, you can create your own webpage and raise funds for the
            poorest of the poor in the Caribbean and Latin America.
          </p>
          <Link href="/project" className="button large w-button">
            More Project
          </Link>
        </div>

        {/* 5 image tiles */}
        {tiles.map((t) => (
          <a key={t.href} href={t.href} className={`project-tile ${t.cls}`}>
            <img
              className="project-image"
              src={t.img}
              alt={t.title}
              loading="lazy"
            />
            <div className="project-hover-card">
              <div className="project-tags">
                {t.tags.map((tag) => (
                  <span key={tag} className="pop-up-tags-content">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-hover-title">{t.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
