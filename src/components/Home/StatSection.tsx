import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function StatSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      //whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[322px] bg-green-100 bg-[url('/images/stats-background.svg')] bg-no-repeat bg-cover bg-right px-20 text-white flex items-center justify-center gap-20"
    >
      {stats.map((stat, idx) => (
        <StartCard key={idx} {...stat} />
      ))}
    </motion.div>
  );
}

export default StatSection;

const StartCard = (props: { icon: string; title: string; value: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={`/icons/${props.icon}.svg`}
        alt={props.title}
        width={40}
        height={40}
      />
      <div className="flex flex-col gap-1">
        <h6 className="text-3xl">{props.value}</h6>
        <p>{props.title} </p>
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
