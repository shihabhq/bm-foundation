import DonationSection from "@/sections/Donation";

export default function DonationPage() {
  return (
    <div className="mb-20">
      <div className="pt-28 md:pt-14 ">
        <div className="bg-[#284a4e] text-white py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              আপনার অনুদান, মানুষের উপকার
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              আপনার অনুদান আমাদের সেবামূলক কার্যক্রম চালিয়ে যেতে সাহায্য করবে
              এবং সমাজের অবহেলিত মানুষদের জীবনে পরিবর্তন আনবে।
            </p>
          </div>
        </div>

        <DonationSection isCompact={false} />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#284a4e] mb-4">
              অনুদান প্রক্রিয়া
            </h3>

            <div className="space-y-6 mt-6">
              <div className="flex">
                <div className="flex-shrink-0 bg-[#377375] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">
                    বিকাশ অথবা ব্যাঙ্কের নম্বর কপি করুন
                  </h4>
                  <p className="text-gray-600 mt-1">
                    উপরে দেওয়া বিকাশ নম্বর অথবা ব্যাঙ্ক নম্বর কপি করুন
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 bg-[#377375] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">
                    অনুদানের পরিমাণ নির্ধারণ করুন
                  </h4>
                  <p className="text-gray-600 mt-1">
                    বিকাশ কিংবা ব্যাঙ্কিং এপস থেকে অনুদানের পরিমাণ নির্ধারণ
                    করুন। অথবা সরাসরি ব্যাঙ্কে গিয়ে আপনি টাকা পাঠাতে পারেন।
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 bg-[#377375] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">
                    পেমেন্ট সম্পন্ন করুন
                  </h4>
                  <p className="text-gray-600 mt-1">
                    আপনার পিন নম্বর দিয়ে বিকাশ কিংবা ব্যাঙ্কের মাধ্যমে সহজেই
                    টাকা পাঠিয়ে দিন
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 bg-[#377375] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">
                    আমাদের অবহিত করুন (ঐচ্ছিক)
                  </h4>
                  <p className="text-gray-600 mt-1">
                    আপনি চাইলে আমাদের হোয়াটসএপ{" "}
                    <span className="text-[#377375] font-medium">০০০</span> এ
                    আপনার অনুদানের বিষয়ে জানাতে পারেন।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#284a4e]/5 rounded-xl p-6 md:p-8 mt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-[#284a4e]/10 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#284a4e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#284a4e] text-lg">
                  অনুদান সম্পর্কিত তথ্য
                </h4>
                <p className="text-gray-600 mt-2">
                  আপনার অনুদান সম্পূর্ণভাবে কর মুক্ত। আমরা আপনার অনুদানের
                  সর্বোত্তম ব্যবহারে প্রতিশ্রুতিবদ্ধ । আপনার অনুদান সম্পর্কে কোন
                  প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
