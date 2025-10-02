// app/events/page.jsx
import EventsGrid from "@/app/components/events/EventsGrid";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import PageHero from "@/app/components/shared/PageHero";
import TopBar from "@/app/components/shared/TopBar";

import { events as EVENTS } from "../../data/events"; // <-- NEW

export default function EventsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          subtitle="How We Reach People..."
          title={"Our Events"}
          bg="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80"
          height="90vh"
          vAlign="center"
          bgPosition="center 38%"
          overlayOpacity={0.36}
        />
        <EventsGrid items={EVENTS} />
      </main>
      <Footer />
    </>
  );
}
