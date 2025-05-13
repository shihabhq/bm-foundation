import ContactSection from "@/sections/Contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <div className="pt-24 md:pt-28 mb-20">
        <div className="bg-[#284a4e] text-white py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              যোগাযোগ করুন
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন।
              আমরা সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#284a4e] mb-4">
                আমাদের সম্পর্কে
              </h2>
              <p className="text-gray-600 mb-6">
                বন্ধুমহল ফাউন্ডেশন ২০০৮ সাল থেকে সমাজের অবহেলিত মানুষদের পাশে
                দাঁড়ানোর জন্য কাজ করে যাচ্ছে। আমাদের লক্ষ্য হল সমাজের সকল
                স্তরের মানুষের জীবনমান উন্নয়ন।
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    ১২৩/এ, মিরপুর রোড, ঢাকা-১২১৬
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">info@bondhumohol.org</p>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#377375]/10 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#377375]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    সকাল ৯টা - বিকাল ৫টা (শুক্রবার বন্ধ)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#284a4e]/10 rounded-lg">
                <h3 className="font-semibold text-[#284a4e]">
                  সামাজিক যোগাযোগ মাধ্যম
                </h3>
                <div className="flex items-center mt-3 space-x-4">
                  <a
                    href="https://facebook.com/bondhumohol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#1877F2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 8l-3-3m0 0l-3 3m3-3v12m-8-2v2a2 2 0 002 2h12a2 2 0 002-2v-2M5 10h14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/bondhumohol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#FF0000]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/bondhumohol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#E4405F]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Office building"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <ContactSection isCompact={false} />
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
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
                  অফিস সময়সূচী
                </h4>
                <p className="text-gray-600 mt-2">
                  আমাদের অফিস সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত খোলা থাকে,
                  শুক্রবার বন্ধ। আপনি যেকোনো সময় আমাদের সাথে যোগাযোগ করতে
                  পারেন, আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।
                </p>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
}
