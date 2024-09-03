import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

function StatSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="sm:h-[322px] h:auto bg-green-100 sm:bg-[url('/images/stats-background.svg')] bg-no-repeat bg-cover bg-right px-5 sm:px-20 py-20 sm:py-0 text-white sm:flex items-center justify-center gap-20 space-y-6 sm:space-y-0 mb-5 sm:mb-0"
    >
      {stats.map((stat, idx) => (
        <StartCard key={idx} id={idx} {...stat} />
      ))}
    </motion.div>
  );
}

export default StatSection;

const StartCard = (props: {
  icon: string;
  title: string;
  value: string;
  id: number;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2",
        props.id === 1 && "justify-end sm:justify-center"
      )}
    >
      <Image
        src={`/icons/${props.icon}.svg`}
        alt={props.title}
        width={40}
        height={40}
      />
      <div className="flex flex-col gap-1">
        <h6 className="text-3xl">{props.value}</h6>
        <p className="text-sm sm:text-base">{props.title} </p>
      </div>
    </div>
  );
};

const stats = [
  {
    icon: "donation_received",
    title: "Donation Recieved",
    value: "985",
  },
  {
    icon: "money_donated",
    title: "Money Donated",
    value: "$10M",
  },
  {
    icon: "active_campaign",
    title: "Active Campaigns",
    value: "15+",
  },
];
