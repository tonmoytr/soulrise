import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import JoinOrganization from "@/app/components/team/JoinOrganization";
import TeamGrid from "@/app/components/team/TeamGrid";

export default function TeamPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <TeamGrid />
        <JoinOrganization />
      </main>
      <Footer />
    </>
  );
}
