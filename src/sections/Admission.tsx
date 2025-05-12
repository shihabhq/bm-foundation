"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionFormSection = ({
  isCompact = true,
}: {
  isCompact?: boolean;
}) => {
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    gender: "",
    parentName: "",
    relation: "",
    phone: "",
    email: "",
    address: "",
    previousSchool: "",
    preferredClass: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be handled later as mentioned
    alert("ফর্ম জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
  };

  return (
    <section
      className={`py-16 md:py-20 px-4 ${isCompact ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#377375]">কিন্ডারগার্টেন</span> ভর্তি
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            আমাদের কিন্ডারগার্টেন স্কুলে আপনার সন্তানের উজ্জ্বল ভবিষ্যতের যাত্রা
            শুরু করুন। নিচের ফর্ম পূরণ করে আবেদন করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#377375]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#284a4e]/10 rounded-full z-0"></div>

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/kindergarten.png"
                  alt="Kindergarten classroom with happy children"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />

                {!isCompact && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#284a4e]/80 to-transparent p-6">
                    <p className="text-white font-medium">
                      আমাদের কিন্ডারগার্টেন স্কুলে শিশুদের সুখময় শিক্ষা পরিবেশ
                    </p>
                  </div>
                )}
              </div>
            </div>

            {!isCompact && (
              <div className="mt-8 bg-[#284a4e]/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#284a4e] mb-3">
                  আমাদের কিন্ডারগার্টেন সম্পর্কে
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
                    <span>অভিজ্ঞ ও প্রশিক্ষিত শিক্ষক মণ্ডলী</span>
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
                    <span>আধুনিক শিক্ষা উপকরণ ও খেলাধুলার সুবিধা</span>
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
                    <span>নিরাপদ ও পরিচ্ছন্ন পরিবেশ</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#284a4e] mb-6">
                ভর্তি আবেদন ফর্ম
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Child Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    শিশুর তথ্য
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="childName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        শিশুর নাম *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="childAge"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        বয়স *
                      </label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        required
                        min="2"
                        max="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        লিঙ্গ *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      >
                        <option value="">বাছাই করুন</option>
                        <option value="male">ছেলে</option>
                        <option value="female">মেয়ে</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="preferredClass"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ভর্তি হতে ইচ্ছুক শ্রেণী *
                      </label>
                      <select
                        id="preferredClass"
                        name="preferredClass"
                        value={formData.preferredClass}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      >
                        <option value="">বাছাই করুন</option>
                        <option value="playgroup">প্লে গ্রুপ</option>
                        <option value="nursery">নার্সারি</option>
                        <option value="kg">কেজি</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    অভিভাবকের তথ্য
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        অভিভাবকের নাম *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="relation"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        শিশুর সাথে সম্পর্ক *
                      </label>
                      <select
                        id="relation"
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      >
                        <option value="">বাছাই করুন</option>
                        <option value="father">বাবা</option>
                        <option value="mother">মা</option>
                        <option value="guardian">অন্যান্য অভিভাবক</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ইমেইল
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Address and Additional Information */}
                <div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ঠিকানা *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="previousSchool"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        পূর্ববর্তী স্কুল (যদি থাকে)
                      </label>
                      <input
                        type="text"
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="additionalInfo"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        অতিরিক্ত তথ্য
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    আবেদন জমা দিন
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {isCompact && (
          <div className="text-center mt-12">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              বিস্তারিত জানুন
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
        )}
      </div>
    </section>
  );
};

export default AdmissionFormSection;
