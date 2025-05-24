import Link from "next/link";

const ConstitutionSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            আমাদের <span className="text-[#377375]">সংবিধান</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল সোসাইটি ২০০৯ এর গঠনতন্ত্র
            এবং নিয়মাবলী। আমাদের সংগঠনের মূলনীতি ও কার্যপ্রণালী সম্পর্কে জানুন।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap- items-center">
          {/* Left Side - Constitution Content */}
          <div className=" ">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#284a4e]/80 to-transparent p-6">
                  <p className="text-white font-medium">
                    বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল সোসাইটির গঠনতন্ত্র
                    ও নিয়মাবলী
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#284a4e]/5 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#284a4e] mb-3">
                গঠনতন্ত্রের মূল বিষয়সমূহ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#377375] mt-0.5 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>সংগঠনের পরিচিতি ও উদ্দেশ্য</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#377375] mt-0.5 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>সদস্যপদ ভর্তি শর্তাবলী</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#377375] mt-0.5 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>সাংগঠনিক কাঠামো</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#377375] mt-0.5 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>সভা ও নির্বাচন পদ্ধতি</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#377375] mt-0.5 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>আর্থিক ব্যবস্থাপনা</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#284a4e] mb-6">
                বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল সোসাইটির গঠনতন্ত্র
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#377375] mb-2">
                    নাম
                  </h4>
                  <p className="text-gray-700">
                    বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল সোসাইটি ২০০৯ (BMS)
                    - একটি বিজনেস প্ল্যাটফর্ম
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#377375] mb-2">
                    ১ম ভাগ: সংগঠনের পরিচিতি
                  </h4>
                  <p className="text-gray-700">
                    চট্টগ্রাম বিভাগের কুমিল্লা জেলার তিতাস উপজেলার জয়ারকান্দি
                    ইউনিয়নে জনকল্যাণমূলক বা মানবতার সেবায় কাজ করার লক্ষ্যে
                    ০১-০১-২০০৯ সালে প্রতিষ্ঠিত হয় বন্ধুমহল মানব কল্যান
                    ফাউন্ডেশন ও বন্ধুমহল সোসাইটি ২০০৯।
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#377375] mb-2">
                    অনুচ্ছেদ-১: সংগঠনের নামকরণ এবং স্লোগান
                  </h4>
                  <p className="text-gray-700">
                    এই সংগঠনের নাম বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল
                    সোসাইটি ২০০৯ নামে অভিহিত হবে। সংগঠনের স্লোগান হবে - মানবতার
                    কল্যাণে পাশে আছি আমরা।
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#377375] mb-2">
                    অনুচ্ছেদ-২: সংগঠনের ধরণ এবং বৈশিষ্ট্য
                  </h4>
                  <p className="text-gray-700">
                    বন্ধুমহল মানব কল্যান ফাউন্ডেশন ও বন্ধুমহল সোসাইটি ২০০৯ একটি
                    সম্পূর্ণ অসাম্প্রদায়িক, অরাজনৈতিক, অলাভজনক, বিজনেস
                    প্ল্যাটফর্ম, এবং সামাজিক, গণতান্ত্রিক জনকল্যাণমুখী সংগঠন।
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#377375] mb-2">
                    সংগঠনের লক্ষ্য ও উদ্দেশ্য
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      • সমাজের কল্যাণমূলক কর্ম যা সকল সদস্যদের মধ্যে ঐক্য ও
                      পারস্পরিক সুসম্পর্কের মাধ্যমে বাস্তবায়িত হবে
                    </li>
                    <li>• গরীবদের মাঝে শীতবস্ত্র দান করা</li>
                    <li>
                      • স্বাস্থ্যসেবা দান ও সামাজিক এবং শিক্ষা কর্মকাণ্ড
                      পরিচালনা করা
                    </li>
                    <li>
                      • এলাকার গরীব, অসহায় মেধাবী ছাত্র-ছাত্রীদের পড়ালেখা
                      চালিয়ে যেতে সহায়তা প্রদান করা...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/constitution"
            className="inline-flex items-center justify-center bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            সম্পূর্ণ সংবিধান পড়ুন
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionSection;
