// components/team/JoinOrganization.jsx
export default function JoinOrganization({
  title = "Join Our Organization",
  subtitle = "Become Volunteer",
  blurb = "We Aspire To Be Like Helpers. So We Serve All People. No Matter Their Religion, Ethnicity, Or Gender.",
  cta = { label: "Join Us Now", href: "/volunteer" },
  bg = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop",
}) {
  return (
    <section
      className="join-our-oraganization" /* keep OG class (typo included) for styling parity */
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="organization-overlay-wrap">
        <div className="container w-container">
          <div className="newsletter-content-wrap">
            <div className="newsletter-content">
              <div className="section-title-wrap">
                <p className="sub-title white">{subtitle}</p>
                <h2 className="section-title white">{title}</h2>
                <p className="section-content white">{blurb}</p>
              </div>
              <div className="newsletter-button-wrap">
                <a href={cta.href} className="black-button large w-button">
                  {cta.label}
                </a>
              </div>
            </div>
          </div>
          <div className="newsletter-overlay" />
        </div>
      </div>
    </section>
  );
}
