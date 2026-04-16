import { technologies } from "@/constants/index.ts";
import React, { Suspense, useState } from "react";
import type { TechnologiesParams } from "@/types";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { styles, textVariant } from "@/lib/utils";
// Image replaced;
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Spinner from "@/components/Spinner";

const Tech: React.FC = (): React.JSX.Element => {
  const [clickedTech, setClickedTech] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setClickedTech((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have learnt so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills 💻.</h2>
      </motion.div>
      {/* {isWideScreen ? (
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology: TechnologiesParams) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon.src} />
            </div>
          ))}
        </div>
      ) : ( */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 mt-20! gap-3">
        {technologies.map((technology: TechnologiesParams) => (
          <TooltipProvider key={technology.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`bg-[#1D1836] grid place-items-center hover:bg-violet-800 rounded-xl aspect-square transition-transform duration-300 hover:scale-105 cursor-pointer ${clickedTech === technology.name ? "bg-violet-950" : ""
                    }`}
                  onClick={() => handleClick(technology.name)}
                >
                  <Suspense fallback={<Spinner />}>
                    <img
                      loading="lazy"
                      src={technology.icon}
                      alt={technology.name}
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </Suspense>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#111827] border-transparent rounded">
                <p>{technology.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      {/* } */}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
