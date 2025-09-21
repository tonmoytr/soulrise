import ContactSection from "@/app/components/contact/ContactSection";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import PageHero from "@/app/components/shared/PageHero";
import TopBar from "@/app/components/shared/TopBar";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          subtitle="Contact"
          title={"Get in Touch"}
          bg="/assets/images/photos/contact.jpg"
          height="90vh"
          vAlign="center"
          bgPosition="center 38%"
          overlayOpacity={0.36}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
