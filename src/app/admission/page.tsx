import Heading from "@/components/Heading";
import MembershipForm from "@/components/MembershipForm";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <div className="mb-16">
      <div className="pt-24 md:pt-28">
        <div className="bg-[#284a4e] mb-16 text-white py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              সদস্যপদ নিবন্ধন
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              বন্ধুমহল ফাউন্ডেশনের সদস্য হয়ে সমাজসেবায় অংশগ্রহণ করুন। আপনার
              অবদান সমাজের উন্নয়নে সহায়তা করবে।
            </p>
          </div>
        </div>

        <Heading
          coloredText="সদস্যপদ"
          text="নিবন্ধন ফর্ম"
          description="বন্ধুমহল ফাউন্ডেশনের সদস্য হতে নিচের ফর্মটি পূরণ করুন। আমরা আপনার
            আবেদন পর্যালোচনা করে শীঘ্রই আপনার সাথে যোগাযোগ করব।"
        />

        <div className=" max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Image and Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Membership benefits"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#284a4e]/80 to-transparent p-6">
                    <p className="text-white font-medium">
                      বন্ধুমহল ফাউন্ডেশনের সদস্য হয়ে সমাজসেবায় অংশগ্রহণ করুন
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#284a4e]/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#284a4e] mb-3">
                  সদস্যপদের সুবিধাসমূহ
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
                    <span>সমাজসেবামূলক কার্যক্রমে অংশগ্রহণের সুযোগ</span>
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
                    <span>বিভিন্ন প্রশিক্ষণ কর্মসূচিতে অগ্রাধিকার</span>
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
                    <span>সংস্থার সিদ্ধান্ত গ্রহণে অংশগ্রহণের সুযোগ</span>
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
                    <span>নিয়মিত সংস্থার কার্যক্রম সম্পর্কে আপডেট</span>
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
                    <span>বিশেষ অনুষ্ঠানে অংশগ্রহণের সুযোগ</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="/registration.pdf"
                  download
                  className="flex items-center justify-center bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  ফিজিক্যাল ফর্ম ডাউনলোড করুন
                </a>
                <p className="text-sm text-gray-500 text-center mt-2">
                  আপনি চাইলে ফিজিক্যাল ফর্ম ডাউনলোড করে পূরণ করতে পারেন
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <MembershipForm />
          </div>
        </div>
      </div>
    </div>
  );
}
