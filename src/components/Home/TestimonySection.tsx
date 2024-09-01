"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

function TestimonySection() {
  const [testimonyIndex, setTestimonyIndex] = React.useState(0);

  let testimony = testimonyList[testimonyIndex];

  function nextTestimony() {
    if (testimonyIndex < testimonyList.length - 1) {
      setTestimonyIndex(testimonyIndex + 1);
    }
  }

  function prevTestimony() {
    if (testimonyIndex > 0) {
      setTestimonyIndex(testimonyIndex - 1);
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimony();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[580px] bg-green-100 px-20 text-white font-normal"
    >
      <div className="flex">
        <div className="flex-1 flex flex-col justify-center gap-y-10">
          <Image src="/icons/quote.svg" alt="quote" width={80} height={80} />
          <p className="w-[600px]">{testimony.quote}</p>
          <div>
            <h6 className="font-semibold">{testimony.name}</h6>
            <p className="font-light">{testimony.role}</p>
          </div>
          <Image
            src="/images/ellipse-dots.svg"
            alt="arrow left"
            className="cursor-pointer"
            width={60}
            height={60}
            onClick={nextTestimony}
          />
        </div>
        <div className="h-full flex flex-col items-center">
          <Image
            src={`/images/${testimony.image}.png`}
            alt="hero image"
            className="p-8 pb-0"
            width={400}
            height={400}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonySection;

const testimonyList = [
  {
    name: "Community Head",
    role: "CEO at XYZ",
    image: "testimonial-1",
    quote:
      "We had an incredible experience working with Dapipo and were impressed they made such a big difference in only three weeks. Our community is so grateful for the wonderful changes they added in our community.",
  },
  {
    name: "Community Supervisor",
    role: "CEO at JK.",
    image: "testimonial-1",
    quote:
      "Working with Dapipo was a remarkable experience. Their dedication and expertise delivered impressive results in just three weeks. Our community is deeply appreciative of the meaningful improvements they implemented.",
  },
  {
    name: "Community Advisor",
    role: "Lawyer at AB.",
    image: "testimonial-1",
    quote:
      "Dapipo exceeded all expectations! In just three weeks, they transformed our project completely. The positive impact on our community is undeniable, and we couldn’t be more thankful for their efforts",
  },
];
