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
      className="flex h-[536px]"
      id="about-us"
    >
      <div className="h-full flex-1 flex flex-col items-center bg-[url('/images/about-background.svg')] bg-no-repeat bg-left px-20 pt-10">
        <Image
          src="/images/about-image.svg"
          alt="hero image"
          className="p-5"
          width={496}
          height={496}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-y-7 h-full text-black px-20 bg-[url('/images/inverted-curved-rectangle.svg')] bg-no-repeat  bg-[top_right_80px] pt-10">
        <h6 className="section-head mb-5">About Us</h6>
        <p className="text-justify">
          We provide worldview-expanding experiences (and lots of fun!) to the
          lives of kids and teens in partnership with local churches and camps.
          one block at a time one kid at a time.
        </p>
        <div>
          <button className="outline-button">Read More</button>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
