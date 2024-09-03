import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function GallerySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="sm:h-[712px] p-5 sm:p-20 sm:bg-[url('/images/inverted-curved-rectangle.svg'),_url('/images/upright-curved-rectangle.svg')] sm:bg-gallery-custom-position sm:bg-no-repeat space-x-0"
      id="campaigns"
    >
      <div className="flex justify-start">
        <Image
          src="/images/gallery_row_one.png"
          alt="Gallery image"
          className="sm:p-5"
          width={900}
          height={900}
        />
      </div>
      <div className="flex justify-end">
        <Image
          src="/images/gallery_row_two.png"
          alt="Gallery image"
          className="sm:p-5"
          width={900}
          height={900}
        />
      </div>
    </motion.div>
  );
}

export default GallerySection;
