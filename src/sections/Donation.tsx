"use client";
const DonationSection = ({ isCompact = true }: { isCompact?: boolean }) => {
  return (
    <section
      className={`py-16 md:py-20 px-4 ${isCompact ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#377375]">অনুদান</span> করুন
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            আপনার অনুদান আমাদের সেবামূলক কার্যক্রম চালিয়ে যেতে সাহায্য করবে এবং
            সমাজের অবহেলিত মানুষদের জীবনে পরিবর্তন আনবে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Transfer */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border-t-4 border-[#284a4e] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-[#284a4e]/10 p-3 rounded-full">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#284a4e] ml-4">
                ব্যাংক ট্রান্সফার
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">ব্যাংকের নাম</p>
                <p className="font-medium text-gray-800">যমুনা ব্যাংক</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">একাউন্ট নম্বর</p>
                <div className="flex items-center">
                  <p className="font-medium text-gray-800 bg-gray-100 py-2 px-4 rounded-md select-all">
                    1101006304339
                  </p>
                  <button
                    className="ml-2 text-[#377375] hover:text-[#284a4e] transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText("20501340100000123");
                      alert("একাউন্ট নম্বর কপি করা হয়েছে!");
                    }}
                    aria-label="Copy account number"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">ব্রাঞ্চ</p>
                <p className="font-medium text-gray-800">গৌরীপুর বাজার শাখা</p>
              </div>
            </div>
          </div>

          {/* bKash */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border-t-4 border-[#E2136E] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-[#E2136E]/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#E2136E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E2136E] ml-4">
                বিকাশ
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">একাউন্ট টাইপ</p>
                <p className="font-medium text-gray-800">পার্সোনাল একাউন্ট</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">বিকাশ নম্বর</p>
                <div className="flex items-center">
                  <p className="font-medium text-gray-800 bg-gray-100 py-2 px-4 rounded-md select-all">
                    01837756633
                  </p>
                  <button
                    className="ml-2 text-[#E2136E] hover:text-[#b30f57] transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText("01712345678");
                      alert("বিকাশ নম্বর কপি করা হয়েছে!");
                    }}
                    aria-label="Copy bKash number"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">রেফারেন্স</p>
                <p className="font-medium text-gray-800">DONATION</p>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default DonationSection;
