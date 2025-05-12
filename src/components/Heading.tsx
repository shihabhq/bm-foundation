const Heading = ({
  coloredText,
  text,
  description,
}: {
  coloredText: string;
  text: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {text} <span className="text-secondary">{coloredText}</span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default Heading;
