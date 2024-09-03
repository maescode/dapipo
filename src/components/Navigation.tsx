import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <>
      <MaxViewNav />
      <MobileNav />
    </>
  );
}

const MaxViewNav = () => {
  return (
    <div className="hidden sm:flex items-center justify-between py-5 sm:px-20">
      <Link className="font-bold text-2xl" href={"/"}>
        Dapipo
      </Link>
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
};

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      <motion.nav className="sm:hidden block relative">
        <div className="flex items-center justify-between p-5">
          <Link className="font-bold text-2xl" href={"/"}>
            Dapipo
          </Link>
          {isOpen ? (
            <motion.img
              src={"/icons/close.png"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="cursor-pointer  rounded-full size-5"
              width={24}
              height={24}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
          transition={{ duration: 1 }}
        >
          <div className="p-5 flex flex-col gap-10 w-full h-screen absolute bg-primary z-50">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>
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
