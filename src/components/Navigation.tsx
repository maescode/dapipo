import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

function Navigation() {
  return (
    <>
      <div className="hidden sm:flex items-center justify-between py-5 sm:px-20">
        <Link href={"/"}>Dapipo</Link>
        <div className="flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.path}
              className={clsx(idx === navLinks.length - 1 && "button")}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="sm:hidden flex justify-between p-5">
        <Link href={"/"}>Dapipo</Link>
        <Image
          src="/icons/menu.svg"
          alt="menu"
          width={31}
          height={18}
          onClick={() => alert("hello")}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default Navigation;

const navLinks = [
  {
    name: "About Us",
    path: "/#about-us",
  },
  {
    name: "Campaigns",
    path: "#campaigns",
  },
  {
    name: "Contact Us",
    path: "#",
  },
  {
    name: "Donate",
    path: "#",
  },
];
