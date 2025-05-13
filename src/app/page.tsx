import Activities from "@/sections/Activities";

import ContactSection from "@/sections/Contact";
import DonationSection from "@/sections/Donation";
import Hero from "@/sections/Hero";
import MembershipForm from "@/sections/Membership";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" mt-30 max-w-[100%] lg:w-[60%] lg:max-w-[1280px] mx-auto">
        <Image
          width={1500}
          height={760}
          src={"/banner.jpg"}
          alt="banner"
        ></Image>
      </div>
      <Hero />
      <Activities />
      <DonationSection />
      <MembershipForm />
      <ContactSection />
    </>
  );
}
