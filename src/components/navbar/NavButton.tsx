import Link from "next/link";

const NavButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className="text-lg transition-all bg-secondary font-semibold text-white hover:bg-[#284a4e] px-6 py-2"
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavButton;
