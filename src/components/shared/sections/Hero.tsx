import { styles } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { cv, git_square, linkdln } from "@/assets";

const Hero = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 767);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ overflowWrap: "anywhere" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <ReactTyped
              strings={[
                "Moemen Saadeh",
                "a Full-Stack Developer",
                "an Arduino Enthusiast",
                "a Security Explorer",
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop
              className="text-[#915eff]"
            />
          </h1>
          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A full-stack web developer passionate about creating dynamic and
              secure web applications, with a keen interest in exploring
              security and Arduino projects, constantly seeking innovation and
              technical excellence.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <a
                href={"/assets/Moemen_Saadeh_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cv}
                  alt="cv"
                  className="w-12 h-12 cursor-pointer"
                  loading="lazy"
                />
              </a>
              <a href={"https://github.com/Moemen12/"}>
                <img
                  src={git_square}
                  alt="github"
                  className="w-16 h-16"
                  loading="lazy"
                />
              </a>
              <a
                href={"https://www.linkedin.com/in/moemen-saadeh-707436260"}
              >
                <img
                  src={linkdln}
                  alt="Linkdln"
                  className="w-14 h-14"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;