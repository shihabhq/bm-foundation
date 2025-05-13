"use client";

import MembershipForm from "@/components/MembershipForm";
import Heading from "@/components/Heading";

const MembershipSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <Heading
          coloredText="নিবন্ধন ফর্ম"
          text="সদস্যপদ"
          description="বন্ধুমহল ফাউন্ডেশনের সদস্য হতে নিচের ফর্মটি পূরণ করুন। আমরা আপনার
            আবেদন পর্যালোচনা করে শীঘ্রই আপনার সাথে যোগাযোগ করব।"
        />
        <div className=" w-full flex items-center justify-center">
          <a
            href="/registration.pdf"
            download
            className="w-fit cursor-pointer bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            ফরম ডাউনলোড করুন
          </a>
        </div>

        {/* Form */}
        <MembershipForm />
      </div>
    </section>
  );
};

export default MembershipSection;
