import Link from "next/link";

const Navlink = ({
  href,
  text,
  isActive,
}: {
  href: string;
  text: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`hover:text-primary hover:underline transition-all duration-150 font-medium
        ${isActive && "text-primary"}`}
    >
      {text}
    </Link>
  );
};

export default Navlink;
