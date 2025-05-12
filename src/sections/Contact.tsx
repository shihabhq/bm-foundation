
import Image from "next/image";

const ContactSection = ({ isCompact = true }: { isCompact?: boolean }) => {
  return (
    <section
      className={`py-16 md:py-20 px-4 ${isCompact ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#377375]">যোগাযোগ</span> করুন
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন।
            আমরা সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Phone Call */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border-t-4 border-[#284a4e] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#284a4e]/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#284a4e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#284a4e] mb-3">
                ফোন কল
              </h3>
              <p className="text-gray-600 mb-5">
                আমাদের সাথে সরাসরি কথা বলতে কল করুন
              </p>

              <a
                href="tel:+8801837756633"
                className="flex items-center justify-center bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 w-full"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                কল করুন
              </a>

              <p className="mt-4 font-medium text-gray-700">01837756633</p>
              <p className="text-sm text-gray-500">
                সকাল ৯টা - রাত ৮টা, সপ্তাহের সবদিন
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border-t-4 border-[#25D366] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#25D366]/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#25D366]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#25D366] mb-3">
                হোয়াটসঅ্যাপ
              </h3>
              <p className="text-gray-600 mb-5">
                দ্রুত উত্তরের জন্য হোয়াটসঅ্যাপে মেসেজ করুন
              </p>

              <a
                href="https://wa.me/393277779363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 w-full"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                মেসেজ করুন
              </a>

              <p className="mt-4 font-medium text-gray-700">+৮৮০ ১৭১২৩৪৫৬৭৮</p>
              <p className="text-sm text-gray-500">দ্রুত উত্তর পাবেন</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border-t-4 border-[#1877F2] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1877F2]/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#1877F2]"
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
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1877F2] mb-3">
                ফেসবুক
              </h3>
              <p className="text-gray-600 mb-5">
                আমাদের ফেসবুক পেজে মেসেজ করুন
              </p>

              <a
                href="https://m.me/61574575700265"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#1877F2] hover:bg-[#0d65d9] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 w-full"
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
                    d="M16 8l-3-3m0 0l-3 3m3-3v12m-8-2v2a2 2 0 002 2h12a2 2 0 002-2v-2M5 10h14"
                  />
                </svg>
                মেসেজ করুন
              </a>

              <p className="mt-4 font-medium text-gray-700">@bondhumohol</p>
              <p className="text-sm text-gray-500">
                আমাদের পেজে লাইক দিতে ভুলবেন না
              </p>
            </div>
          </div>
        </div>

        {!isCompact && (
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

            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#284a4e]/10 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <h4 className="font-bold text-[#284a4e]">
                      বন্ধুমহল ফাউন্ডেশন
                    </h4>
                    <p className="text-gray-600">
                      ১২৩/এ, মিরপুর রোড, ঢাকা-১২১৬
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
