import EventsGrid from "@/app/components/events/EventsGrid";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import PageHero from "@/app/components/shared/PageHero";
import TopBar from "@/app/components/shared/TopBar";

export default function EventsPage() {
  // Replace images/text with your real content later
  const EVENTS = [
    {
      id: "ev-01",
      title: "Education for Poor Children",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "David James",
      organizerUrl: "#",
      excerpt:
        "Podcasting operational change management inside of workflows to establish a framework indicators.",
    },
    {
      id: "ev-02",
      title: "Healthy Food for Growing",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "Jake Gibson",
      organizerUrl: "#",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    },
    {
      id: "ev-03",
      title: "Healthy Food for Growing",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "Jake Gibson",
      organizerUrl: "#",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    },
    {
      id: "ev-04",
      title: "Healthy Food for Growing",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "Jake Gibson",
      organizerUrl: "#",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    },
    {
      id: "ev-05",
      title: "Healthy Food for Growing",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "Jake Gibson",
      organizerUrl: "#",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    },
    {
      id: "ev-06",
      title: "Healthy Food for Growing",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
      dateDay: "30",
      dateMonth: "July",
      organizer: "Jake Gibson",
      organizerUrl: "#",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          subtitle="How We Reach People..."
          title={"Our Events"}
          bg="https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=2000&q=80"
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
