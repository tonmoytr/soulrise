export default function VolunteerImpact({
  title = "More people can make more impact",
  paragraphs = [
    "We aspire to be like helpers. So we serve all people. No matter their religion, ethnicity, or gender. Going after poverty’s symptoms is temporary. Going after its causes is permanent for everyone.",
  ],
  imageSrc = "/assets/images/photos/unity.jpg",
  imageAlt = "People helping each other",
}) {
  return (
    <section className="more-impacts-section" data-component="VolunteerImpact">
      <div className="container w-container">
        <div className="more-impacts-content-flex">
          {/* LEFT: image */}
          <div className="more-impacts-image-wrap">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width="708"
              className=""
            />
          </div>

          {/* RIGHT: copy */}
          <div className="more-impacts-content-wrap">
            <div className="section-title-wrap">
              <h2 className="section-title">{title}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="section-content">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
