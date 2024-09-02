import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slugify } from "@/utilities/helpers";
import Image from "next/image";

function FooterSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-5 py-10 sm:p-20 sm:pb-30 sm:flex space-y-10 sm:space-x-0"
    >
      <div className="flex-1 flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold">Dapipo</h2>
        <p className="sm:w-[350px] w-full sm:text-base text-sm">
          Subscribe to our newsletter for updates and information.
        </p>
        <div className="flex w-[267px] bg-[#bfd3c7] px-3 rounded-md">
          <input
            type="text"
            name="email"
            placeholder="Your email address"
            className="h-[44px] p-2 bg-[#bfd3c7] border-0 flex-1 focus:outline-none placeholder:text-black placeholder:font-light"
          />
          <div className="flex items-center justify-end">
            <Image
              src="/icons/send.svg"
              className="cursor-pointer"
              alt="send"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div>
          <SocialList
            socials={[
              { name: "Instagram", icon: "instagram", url: "#" },
              { name: "Twitter", icon: "twitter", url: "#" },
              { name: "Youtube", icon: "youtube", url: "#" },
            ]}
          />
        </div>
      </div>
      <div className="flex-1 grid sm:grid-cols-3 grid-cols-2 gap-5">
        <div className="hidden sm:block"></div>
        <div>
          <h6 className="mb-5 text-lg font-semibold">Help</h6>
          <LinkList
            links={[
              "FAQs",
              "Donation Queries",
              "Campaign Queries",
              "Donation Guide",
            ]}
          />
        </div>
        <div>
          <h6 className="mb-5 text-lg font-semibold">Active Campaigns</h6>
          <LinkList links={["India", "Singapore", "Thailand", "Nigeria"]} />
        </div>
      </div>
    </motion.div>
  );
}

export default FooterSection;

const LinkList = (props: { links: Array<string> }) => {
  return (
    <div className="flex flex-col gap-5">
      {props.links.map((link, idx) => (
        <Link href={slugify("#")} className="text-sm sm:text-base" key={idx}>
          {link}
        </Link>
      ))}
    </div>
  );
};

const SocialList = (props: {
  socials: { name: string; icon: string; url: string }[];
}) => {
  return (
    <div className="flex flex-row gap-5">
      {props.socials.map((social, idx) => (
        <Link href={social.url} key={idx}>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Image
              src={`/icons/${social.icon}.svg`}
              alt={social.name}
              width={20}
              height={20}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
