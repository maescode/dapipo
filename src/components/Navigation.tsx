import React from "react";
import Link from "next/link";
import clsx from "clsx";

function Navigation() {
  return (
    <div className="flex items-center justify-between py-5 px-20">
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
