export default function VolunteerIntro({
  subtitle = "Help First",
  title = "Let’s help together",
  paragraphs = [
    "The single funds allow you to advise a smaller number of grants, on a schedule or as desired to charitable organization, cause, country, or region.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  ],
  phoneLabel = "Call : +000 365 698",
  phoneHref = "+000365698",
  imageSrc = "/assets/images/photos/1.jpg",
  imageAlt = "Volunteer helping with a smile",
}) {
  return (
    <section className="help-together-section" data-component="VolunteerIntro">
      <div className="container w-container">
        <div className="help-together-content-flex">
          {/* LEFT: copy */}
          <div className="help-together-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">{subtitle}</p>
              <h2 className="section-title">{title}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="section-content">
                  {p}
                </p>
              ))}
            </div>

            <div className="help-together-button-wrap">
              <a
                href={`tel:${phoneHref.replace(/[^\d+]/g, "")}`}
                className="black-button large w-button"
              >
                {phoneLabel}
              </a>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="help-together-image-wrap">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width="708"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
