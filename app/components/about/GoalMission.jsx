export default function GoalMission() {
  const check =
    "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2e571abc525b2538dc5bf_Check%20List.svg";

  const chips = [
    { text: "Make Donation" },
    { text: "Donation Reched 10M" },
    { text: "Education For All" },
    { text: "Become A Volunteer" },
    { text: "Food For Poor People dayle", span: "full" },
  ];

  return (
    <section className="sr-gm">
      <div className="container w-container">
        <div className="sr-gm__grid">
          {/* LEFT: Goal */}
          <div className="sr-gm__col">
            <h2 className="section-title">Our Goal</h2>
            <p className="section-content sr-gm__lead">
              We aspire to be like helpers. So we serve all people, no matter
              their religion, ethnicity, or gender. Going after poverty’s
              symptoms is temporary.
            </p>

            {/* chips */}
            <div className="sr-gm__chips">
              {chips.map((c) => (
                <div
                  key={c.text}
                  className={`sr-gm__chip ${c.span === "full" ? "full" : ""}`}
                >
                  {/* CSS-drawn icon so we can guarantee OG coral */}
                  <span className="sr-gm__icon" aria-hidden="true" />
                  <span className="sr-gm__chip-text">{c.text}</span>
                </div>
              ))}
            </div>

            <p className="section-content sr-gm__foot">
              We want to do more and you can help. By committing a small
              fraction of your income to protect children in need, you can help
              save a child and contribute to SorlRise.
            </p>
          </div>

          {/* RIGHT: Mission */}
          <div className="sr-gm__col">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-content sr-gm__lead">
              In an effort to ensure volunteering at foundation events is
              fulfilling experience for you. Going after its causes is permanent
              for everyone.
            </p>

            <figure className="sr-gm__media">
              <img
                className="sr-gm__img"
                src="assets/images/homepage/13.jpg"
                alt="Hands holding a flower"
                loading="lazy"
              />
              {/* badge number (split the + for precise alignment) */}
              <figcaption className="sr-gm__badge">
                <div className="sr-gm__badge-num">
                  20000<span>+</span>
                </div>
                <div className="sr-gm__badge-sub">Poor Peoples Got Help</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
