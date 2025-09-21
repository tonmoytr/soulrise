export default function AboutSolutions() {
  return (
    <section className="sr-about-solutions">
      <div className="container w-container">
        <div className="sr-as__grid">
          {/* LEFT: image + quote card */}
          <figure className="sr-as__media">
            <img
              className="sr-as__img"
              src="/assets/images/homepage/1.jpg"
              alt="Happy child"
              loading="lazy"
            />
            <figcaption className="sr-as__quote">
              <span className="sr-as__quote-marks" aria-hidden="true">
                “
              </span>
              <span className="sr-as__quote-text">
                Only a life lived for others is worth
              </span>
            </figcaption>
          </figure>

          {/* RIGHT: copy + note + CTA */}
          <div className="sr-as__copy">
            <p className="sub-title pink sr-as__kicker">About Us</p>
            <h2 className="section-title sr-as__title">
              Solutions to Help
              <br />
              People in Need and
              <br />
              Save the Planet
            </h2>

            <p className="section-content sr-as__lead">
              Hunger is stalking the globe, 81 Million people are in need of
              emergency food assistance. In Precision Medicine, Pioneering Young
              Patient Teaches Veteran Doctor.
            </p>

            <div className="sr-as__note">
              <strong>
                Save the Children believes every child deserves a future.
              </strong>
            </div>

            <a href="/about" className="button large w-button sr-as__cta">
              More About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
