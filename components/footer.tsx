import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-[240px] flex justify-start items-center">
      <Link href={"/"}>back to home.</Link>
    </div>
  );
};
