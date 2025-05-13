"use client";
import { useState } from "react";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    fatherName: "",
    village: "",
    post: "",
    district: "",
    nationality: "বাংলাদেশী",
    religion: "",
    profession: "",
    mobile: "",
    nid: "",
    permanentAddress: "",

    // Nominee Info
    nomineeName: "",
    nomineeRelation: "",
    nomineeNid: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    alert("ফর্ম জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div>
            <h3 className="text-xl font-bold text-[#284a4e] pb-2 border-b border-gray-200 mb-4">
              ব্যক্তিগত তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  পিতার নাম *
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="village"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  গ্রাম *
                </label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="post"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ডাকঘর *
                </label>
                <input
                  type="text"
                  id="post"
                  name="post"
                  value={formData.post}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  জেলা *
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  জাতীয়তা *
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="religion"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ধর্ম *
                </label>
                <select
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                >
                  <option value="">বাছাই করুন</option>
                  <option value="ইসলাম">ইসলাম</option>
                  <option value="হিন্দু">হিন্দু</option>
                  <option value="বৌদ্ধ">বৌদ্ধ</option>
                  <option value="খ্রিস্টান">খ্রিস্টান</option>
                  <option value="অন্যান্য">অন্যান্য</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  পেশা *
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="nid"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  জাতীয় পরিচয়পত্র নম্বর *
                </label>
                <input
                  type="text"
                  id="nid"
                  name="nid"
                  value={formData.nid}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                স্থায়ী ঠিকানা *
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
              ></textarea>
            </div>
          </div>

          {/* Nominee Information */}
          <div>
            <h3 className="text-xl font-bold text-[#284a4e] pb-2 border-b border-gray-200 mb-4">
              নমিনির তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nomineeName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  নমিনির নাম *
                </label>
                <input
                  type="text"
                  id="nomineeName"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="nomineeRelation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  নমিনির সাথে সম্পর্ক *
                </label>
                <input
                  type="text"
                  id="nomineeRelation"
                  name="nomineeRelation"
                  value={formData.nomineeRelation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="nomineeNid"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  নমিনির জাতীয় পরিচয়পত্র নম্বর *
                </label>
                <input
                  type="text"
                  id="nomineeNid"
                  name="nomineeNid"
                  value={formData.nomineeNid}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#377375] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Terms and Submit */}
          <div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#377375]"
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                আমি{" "}
                <span className="text-[#377375] hover:underline">
                  নিয়ম ও শর্তাবলী
                </span>{" "}
                পড়েছি এবং সম্মত আছি
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#284a4e] hover:bg-[#1d3639] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              আবেদন জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
