import React from "react";
import { motion } from "framer-motion";

function ChangeLifeSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      //whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" bg-green-100 text-white p-20 flex"
    >
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        <p className="text-4xl font-normal w-[541px]">
          Help us make the world a better place
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        <button className="px-12 py-5 bg-white text-gray-500 text-normal transition-all duration-100 hover:bg-green-50">
          Change a life
        </button>
      </div>
    </motion.div>
  );
}

export default ChangeLifeSection;
