export default function PageHero({
  subtitle = "What We Do",
  title = "About our<br/>Organization",
  bg, // required: background image URL
  height = "460px",
  bgPosition = "center 30%",
  overlayOpacity = 0.42, // strength of the dark layer
}) {
  return (
    <section
      className="sr-hero"
      style={{
        "--hero-h": height,
        "--hero-bg": `url(${bg})`,
        "--hero-pos": bgPosition,
        "--overlay": overlayOpacity,
      }}
      role="banner"
    >
      <div className="sr-hero__overlay" aria-hidden="true" />
      <div className="container w-container sr-hero__inner">
        <div className="sr-hero__copy">
          <p className="sr-hero__subtitle">{subtitle}</p>
          <h1
            className="sr-hero__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    </section>
  );
}
