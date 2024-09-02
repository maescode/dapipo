import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      //whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex sm:h-[536px] h-auto"
      id="about-us"
    >
      <div className="hidden h-full flex-1 sm:flex flex-col items-center sm:bg-[url('/images/about-background.svg')] sm:bg-no-repeat bg-left px-5 sm:px-20 pt-10">
        <Image
          src="/images/about-image.svg"
          alt="hero image"
          className="p-5"
          width={496}
          height={496}
        />
      </div>
      <div className="relative flex-1 sm:flex flex-col justify-center space-y-10 sm:space-y-0  sm:gap-y-7 h-full text-black px-5 sm:px-20 py-10 sm:py-0 sm:bg-[url('/images/inverted-curved-rectangle.svg')] bg-no-repeat  bg-[top_right_80px] sm:pt-10">
        <h6 className="text-3xl font-bold m:section-head mb-5 mt-20 sm:mt-0">
          About Us
        </h6>
        <p className="sm:text-justify">
          We provide worldview-expanding experiences (and lots of fun!) to the
          lives of kids and teens in partnership with local churches and camps.
          one block at a time one kid at a time.
        </p>
        <div>
          <button className="outline-button">Read More</button>
        </div>
        <Image
          src="/images/about-image.svg"
          alt="hero image"
          className="sm:hidden absolute -top-40 -right-5 p-5"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
}

export default AboutSection;
