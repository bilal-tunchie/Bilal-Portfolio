import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { projects } from "../constants";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { github, link } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1}
        transitionSpeed={450}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className="md:relative bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full md:h-[600px]"
      >
        <div className="relative w-full h-[230px]">
          <Image draggable={false}
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            fill
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-1 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_black")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image draggable={false}
                  src={github}
                  alt="Github"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            )}
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_black")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image draggable={false}
                  src={link}
                  alt="Link"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="md:absolute md:bottom-5 md:left-5 mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Created</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {`Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
