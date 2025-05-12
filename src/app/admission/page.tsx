import AdmissionFormSection from "@/sections/Admission";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <div>
      <div className="pt-24 md:pt-28">
        <div className="bg-[#284a4e] text-white py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              কিন্ডারগার্টেন ভর্তি
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              আমাদের কিন্ডারগার্টেন স্কুলে আপনার সন্তানের উজ্জ্বল ভবিষ্যতের
              যাত্রা শুরু করুন। আমরা প্রতিটি শিশুর সামগ্রিক বিকাশে নিবেদিত।
            </p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#284a4e] mb-4">
                আমাদের কিন্ডারগার্টেন
              </h2>
              <p className="text-gray-600 mb-6">
                বন্ধুমহল কিন্ডারগার্টেন স্কুল ২০১০ সাল থেকে শিশুদের মানসম্মত
                শিক্ষা প্রদান করে আসছে। আমাদের লক্ষ্য হল শিশুদের সৃজনশীলতা,
                কৌতূহল এবং শেখার প্রতি আগ্রহ বাড়ানো।
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    প্লে গ্রুপ থেকে কেজি পর্যন্ত ক্লাস
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    অভিজ্ঞ ও প্রশিক্ষিত শিক্ষক মণ্ডলী
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    আধুনিক শিক্ষা উপকরণ ও খেলাধুলার সুবিধা
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#284a4e]/10 rounded-lg">
                <h3 className="font-semibold text-[#284a4e]">ভর্তি সময়সূচী</h3>
                <p className="mt-2 text-gray-700">
                  ভর্তি চলছে সারা বছর। তবে নতুন শিক্ষাবর্ষের জন্য ভর্তি শুরু হয়
                  প্রতি বছর জানুয়ারি মাসে।
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Kindergarten classroom"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <AdmissionFormSection isCompact={false} />
      </div>
    </div>
  );
}
