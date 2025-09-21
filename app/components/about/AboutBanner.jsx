import PageHero from "../shared/PageHero";

export default function AboutBanner() {
  return (
    <>
      {/* TopBar + Navbar already included above */}
      <PageHero
        subtitle="What We Do"
        title={"About our<br/>Organization"}
        bg="/assets/images/homepage/6.jpg"
        height="90vh"
        bgPosition="center 28%" // tweak if you need to center the face
        overlayOpacity={0.42}
      />

      {/* ...rest of About page */}
    </>
  );
}
