import { motion } from "framer-motion";
import React from "react";
import { styles } from "../utils/styles";
import { services } from "../constants";
import Image from "next/image";
import { SectionWrapper } from "../hoc";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        options={{
          max: 54,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image draggable={false} src={icon} alt={title} className="w-36 h-36 object-contain" />
          <h3 className="text-tertiary text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {`Frontend Web Developer with experience in HTML, CSS, JavaScript, TypeScript, React, Next, MySql, MongoDB and Prisma. Quick learner and I have worked on a variety of web Projects. I enjoyed working with clients and understand their needs and delivering high-quality, user-friendly solutions and provide an outstanding user experience. Have ability to learn any stack used by an organization, Passionate about collaborating with other developers, designers and Project Managers.`}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
