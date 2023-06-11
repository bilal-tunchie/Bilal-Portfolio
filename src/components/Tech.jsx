import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
// import { BallCanvas } from "./canvas"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from "next/image";

const Tech = () => {

  const slider = useRef();
  const [trackScrollLeft, setTrackScrollLeft] = useState(0);
  const [trackScrollRight, setTrackScrollRight] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const container = slider.current;
      // Update the scroll position in the ref
      setTrackScrollLeft(container.scrollLeft)
      const isAtEnd = container.scrollLeft === container.scrollWidth - container.clientWidth
      setTrackScrollRight(isAtEnd)
    };
  
    slider.current.addEventListener('scroll', handleScroll);
  
    return () => {
      slider?.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 1000;
  };

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 1000;
  };


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className='relative flex items-center mt-5'>
        <BsFillArrowLeftCircleFill 
          className={` ${trackScrollLeft === 0 && "hidden"} opacity-50 cursor-pointer hover:opacity-100 w-[55px] h-[55px] absolute left-10 text-[#222] z-50`} 
          onClick={slideLeft} size={40} 
        />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          ref={slider}
        >
          {technologies.map(({name, icon}) => (
            <span 
              key={name} 
              className="tech-card inline-flex justify-center bg-white rounded-2xl p-5 w-[215px] h-[250px] mx-5 "
            >
              <Image 
                src={icon}
                alt={name}
                className='w-full h-full inline-block cursor-pointer hover:scale-105 ease-in-out duration-300'
              />
              <p className="title">{name}</p>
            </span>
          ))}
      </div>
        <BsFillArrowRightCircleFill 
          className={`${trackScrollRight && "hidden"} opacity-50 cursor-pointer hover:opacity-100 w-[55px] h-[55px] absolute right-10 text-[#222]` }
          onClick={slideRight} 
          size={40} 
        />
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")
