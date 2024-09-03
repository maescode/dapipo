import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

function OurTeamSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-auto sm:h-[736px] sm:bg-[url('/images/our-team-pattern.svg'),__url('/images/upright-curved-rectangle.svg')] sm:bg-team-custom-position bg-no-repeat px-5 py-10 sm:py-0  sm:px-20 sm:pt-10"
    >
      <h6 className="text-3xl font-bold sm:section-head mb-5 text-center">
        Our Team
      </h6>
      <div className="w-20 h-1 bg-green-100 border my-10 mx-auto" />
      <div className="sm:flex items-center justify-center gap-20 space-y-10 sm:space-y-0">
        {team.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </motion.div>
  );
}

export default OurTeamSection;

const TeamCard = (props: {
  id: number;
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        props.id === 2 && "sm:mt-20"
      )}
    >
      <Image
        src={`/images/${props.image}.png`}
        alt="hero image"
        className="rounded-full"
        height={250}
        width={250}
      />
      <h6 className="mt-5 text-gray-500">{props.name}</h6>
      <p className="font-semibold">{props.role}</p>
    </div>
  );
};

const team = [
  {
    id: 1,
    name: "Harry Williams",
    role: "Founder",
    image: "team-1",
  },
  {
    id: 2,
    name: "Mike Scott",
    role: "Co-Founder",
    image: "team-2",
  },
  {
    id: 3,
    name: "Nick M. White",
    role: "Manager",
    image: "team-3",
  },
];
