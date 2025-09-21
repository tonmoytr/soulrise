// app/page.js

import AboutIntro from "./components/home/AboutIntro";
import AboutSection from "./components/home/AboutSection";
import CausesSection from "./components/home/CausesSection";
import ClientsSection from "./components/home/ClientsSection";
import EventsSection from "./components/home/EventsSection";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Hero from "./components/home/Hero";
import JoinWithUs from "./components/home/JoinWithUs";
import TeamSection from "./components/home/TeamSections";
import WhatWeDo from "./components/home/WhatWeDo";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import TopBar from "./components/shared/TopBar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <AboutSection />
        <CausesSection />
        <JoinWithUs />
        <WhatWeDo />
        <FeaturedProjects />
        <ClientsSection />
        <TeamSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
