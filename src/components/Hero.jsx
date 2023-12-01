import { motion } from "framer-motion";
import { styles } from "@/src/utils/styles";
import React from "react";
// import { ComputersCanvas } from "./canvas";
// import Link from "next/link";
import bg from "../assets/herobg.jpg";
import hero from "../assets/hero.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ isMobile }) => {
  const handleLink = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <Image
        draggable={false}
        src={bg}
        alt="bg"
        className="absolute z-[-1] xl:min-w-full min-w-[1600px] min-h-[100vh]"
      />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[170px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className={styles.heroHeadText}>
            Hi, {`I'm`} <span className="text-[#915eff]">Bilal <small className="blinking-cursor w-[13px]">|</small></span>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Frontend Developer
          </p>
          <div className="flex gap-x-10 items-center mt-4">
            <Link 
              href="https://onedrive.live.com/?authkey=%21AJUkbkwx2aRnR88&id=FEA6A48BA7214AF8%212041&cid=FEA6A48BA7214AF8&parId=root&parQt=sharedby&parCid=UnAuth&o=OneUp" 
              target="/blank">
                <button class="hirebutton">Resume</button>
            </Link>
            <div className="contactButton" onClick={() => handleLink("contact")}> Connect
              <div className="contactButton-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-[650px] hidden lg:block lg:translate-x-[75px]" >
          <Image
            draggable={false}
            src={hero}
            alt="bg"
            className="h-[500px] w-[650px]"
          />
        </div>
      </div>

      {/* <ComputersCanvas isMobile={isMobile} /> */}

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <span onClick={() => handleLink("about")} className="cursor-pointer">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </span>
      </div>
    </section>
  );
};

export default Hero;
