import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-10 overflow-hidden pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-[1280px] md:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              <span className="text-[#284a4e]">বন্ধুমহল</span> মানব কল্যাণ
              ফাউন্ডেশন
            </h1>

            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600">
              বন্ধুমহল একটি অরাজনৈতিক সেবামূলক সংগঠন যা সমাজের অবহেলিত মানুষদের
              পাশে দাঁড়ানোর জন্য প্রতিশ্রুতিবদ্ধ। মানবিক বিপর্যয়ের পাশে আমরা
              আত্ম মানবতার সেবায় সদা প্রস্তুত। মানব সেবার মহৎ মানুষগুলো এগিয়ে
              আসুন মানবতার দিকে, যোগ দিন আমাদের সাথে।
            </p>

            <div className="mt-5 md:mt-8 space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center lg:justify-start">
              <Link
                href="/donation"
                className="bg-[#377375] hover:bg-[#284a4e] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-center"
              >
                অনুদান করুন
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574575700265"
                target="_blank"
                className="bg-white hover:bg-gray-50 text-[#284a4e] border-2 border-[#284a4e] font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md text-center"
              >
                আমাদের ফেসবুকে দেখুন
              </Link>
            </div>

            <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10">
              <div className="flex items-center">
                <div className="bg-[#284a4e]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#284a4e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">
                  ২০+ সদস্য
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#284a4e]/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#284a4e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">
                  ১৫+ বছরের অভিজ্ঞতা
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className=" overflow-hidden w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/hero.png"
                  alt="Bondhumohol foundation's goal"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#284a4e]/80 to-transparent p-6">
                  <p className="text-white font-medium">
                    মানব সেবাই আমাদের একমাত্র উদ্দেশ্য
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default Hero;
