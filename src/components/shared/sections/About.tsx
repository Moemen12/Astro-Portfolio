import React from "react";
import { motion } from "framer-motion";
import { fadeIn, styles, textVariant } from "@/lib/utils";
import { services } from "@/constants/index.ts";
import { Tilt } from "react-tilt";
import SectionWrapper from "./SectionWrapper";
const ServiceCard = ({
  title,
  icon,
}: {
  index: string;
  title: string;
  icon: any;
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient rounded-[20px]! shadow-card!"
      >
        <div className="py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
          {/* Added max-w-[150px] to force text to stack vertically */}
          <h3 className="text-white text-[20px] font-bold text-center max-w-[150px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4! text-secondary text-[17px] max-w-3xl leading-7.5"
      >
        Experienced Full-Stack Developer specializing in React.js, MongoDB,
        Nest.js, and Laravel. Skilled in building scalable applications and
        RESTful APIs with a focus on performance and scalability. Proficient in
        responsive design and rigorous testing practices. Collaborative team
        player committed to delivering innovative solutions and meeting project
        deadlines.
      </motion.p>

      {/* justify-center ensures cards look balanced on mobile */}
      <div className="mt-20! flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={service.title}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

// Ensure your SectionWrapper in Astro is set up to handle React components
export default SectionWrapper(About, "about");