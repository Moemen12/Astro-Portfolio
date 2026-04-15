"use client";
import SectionWrapper from "@/components/shared/sections/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { styles, textVariant } from "@/lib/utils";
// Link replaced;

const Education: React.FC = (): React.JSX.Element => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education. 🏫</h2>
      </motion.div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-2 h-2 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-20 violet-gradient"></div>
        </div>

        <div className="flex flex-col text-base sm:text-lg">
          <p className="text-secondary">Nov 2021 - Jan 2024</p>
          <h3 className="font-semibold">
            Computer Programming -{" "}
            <a
              className="text-violet-500"
              href={"https://www.usak.edu.tr"}
              target="_blank"
            >
              Uşak University
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
