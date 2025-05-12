import Image from "next/image";

const ActivityCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-[#284a4e] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
