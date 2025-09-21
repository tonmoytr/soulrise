import ProjectsGrid from "@/app/components/project/PrjoectGrid";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import PageHero from "@/app/components/shared/PageHero";
import TopBar from "@/app/components/shared/TopBar";

export default function ProjectPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          subtitle="Donations"
          title={"Meet Charity Projects"}
          bg="/assets/images/homepage/5.jpg"
          height="90vh"
          vAlign="center"
          bgPosition="center 38%"
          overlayOpacity={0.36}
        />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
