import Image from "next/image";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="sm:grid grid-cols-2 sm:h-[700px] h-[500px] px-5 sm:px-20 pb-5 bg-[url('/images/hero-mobile-pattern.svg')] sm:bg-[url('/images/hero_pattern.svg')] bg-no-repeat bg-[bottom_-350px_right_-100px] bg-[length:100%_100%] sm:bg-auto  sm:bg-[left_10%_bottom]"
    >
      <div className="flex flex-col justify-center gap-y-10 sm:gap-y-5 h-full">
        <h1 className="text-4xl font-semibold">Bringing hope to the world</h1>
        <p className="sm:w-[496px] w-full text-sm sm:text-lg text-justify">
          We provide worldview-expanding experiences (and lots of fun!) to the
          lives of kids and teens in partnership with local churches and camps.
          one block at a time one kid at a time.
        </p>
        <div>
          <button className="button block">Change a Life</button>
        </div>
      </div>
      <div className="hidden sm:block bg-[url('/images/hero-image.png')] bg-no-repeat bg-cover bg-right"></div>
    </motion.div>
  );
}

export default HeroSection;
