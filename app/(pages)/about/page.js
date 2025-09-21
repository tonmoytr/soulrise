import AboutBanner from "@/app/components/about/AboutBanner";
import AboutSolutions from "@/app/components/about/AboutSolutions";
import GoalMission from "@/app/components/about/GoalMission";
import TeamSection from "@/app/components/home/TeamSections";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";

export default function About() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <AboutBanner />
        <AboutSolutions />
        <GoalMission />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
