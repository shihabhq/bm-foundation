import Activities from "@/sections/Activities";
import AdmissionFormSection from "@/sections/Admission";
import ContactSection from "@/sections/Contact";
import DonationSection from "@/sections/Donation";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Activities />
      <DonationSection />
      <AdmissionFormSection isCompact={false} />
      <ContactSection />
    </>
  );
}
