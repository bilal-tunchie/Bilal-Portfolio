import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../utils/styles";
import {contactBg} from "../assets";
// import { EarthCanvas } from "./canvas";
import { contacts } from "../constants";
import Image from "next/image";
// import StarCanvas from "./canvas/Stars";

const Contact = () => {
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-1 lg:gap-20 xl:items-center overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 py-8 rounded-2xl overflow-hidden max-h-[260px]"
      >
        <p className={`${styles.sectionSubText} px-8`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} px-8`}>Contact.</h3>

        <div className="flex justify-center gap-x-3 bg-white h-full pt-10 px-8 rounded-2xl">
          {contacts.map( ({name, source_link, icon}) =>  (
            <div
              key={source_link}
              onClick={() => window.open(source_link, "_black")}
              className="cursor-pointer"
            >
            <Image draggable={false}
              src={icon}
              alt={name}
              className={`${name !== "github" && "sm:w-[58px] max-w-[50px] sm:h-[58px] sm:translate-y-[-5px]"} ${name === "github" && "w-[40px] h-[40px] translate-y-[5px]"}`}
            />
          </div>))}
        </div>
      </motion.div>

      <div
        className="xl:flex-1 max-h-[700px] xl:h-auto md:h-[550px] lg:h-[350px] h-[350px]"
      >
        <Image draggable={false}
          src={contactBg}
          alt={'contact Background'}
          className="rounded-[52%_48%_53%_47%_/55%_57%_43%_45%] lg:w-[615px] mx-auto"
        />
      </div>

      {/* <StarCanvas /> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
