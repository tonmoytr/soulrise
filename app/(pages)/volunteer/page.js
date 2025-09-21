// app/volunteer/page.jsx
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import PageHero from "@/app/components/shared/PageHero";
import TopBar from "@/app/components/shared/TopBar";
import VolunteerForm from "@/app/components/volunteer/VolunteerForm";
import VolunteerImpact from "@/app/components/volunteer/VolunteerImpact";
import VolunteerIntro from "@/app/components/volunteer/VolunteerIntro";

export default function VolunteerPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          subtitle="Volunteer"
          title={"Become a<br/>Volunteer"}
          bg="/assets/images/photos/vol.jpg"
          height="90vh"
          vAlign="center"
          overlayOpacity={0.36}
          bgPosition="center 40%"
        />
        <VolunteerIntro />
        <VolunteerImpact />
        <VolunteerForm />
      </main>
      <Footer />
    </>
  );
}
