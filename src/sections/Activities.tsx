import ActivityCard from "@/components/activities/ActivitiesCard";
import Heading from "@/components/Heading";

const Activities = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <Heading
          text="আমাদের"
          coloredText="কার্যক্রম"
          description="বন্ধুমহল বিভিন্ন ধরনের সামাজিক কার্যক্রম পরিচালনা করে থাকে যা সমাজের
        বিভিন্ন স্তরের মানুষের জীবনমান উন্নয়নে সহায়তা করে।"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard
            title="শিক্ষা সহায়তা"
            description="আমাদের নিজস্ব কিন্ডারগার্টেন স্কুলে দরিদ্র ও মেধাবী শিক্ষার্থীদের জন্য যত্নসহকারে এবং অত্যন্ত কম খরচে শিক্ষা প্রদান করা হয়।"
            imageSrc="/school.png"
            imageAlt="শিক্ষা সহায়তা কার্যক্রম"
          />

          <ActivityCard
            title="গরীবের পাশে দাঁড়ানো"
            description="গ্রামীণ এলাকায় গরীব ও দুঃখী মানুষদের সেবাদান এবং তাদের সহায়তা করা"
            imageSrc="/poor.png"
            imageAlt="স্বাস্থ্যসেবা কার্যক্রম"
          />

          <ActivityCard
            title="দুর্যোগ সহায়তা"
            description="প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্ত মানুষদের জন্য ত্রাণ সামগ্রী, খাদ্য, পানীয় জল এবং আশ্রয় সহায়তা প্রদান করা হয়।"
            imageSrc="/disaster.png"
            imageAlt="দুর্যোগ সহায়তা কার্যক্রম"
          />
        </div>
      </div>
    </section>
  );
};

export default Activities;
