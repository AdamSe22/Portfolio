import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { formations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ formation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={formation.date}
      iconStyle={{ background: formation.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={formation.icon}
            alt={formation.institut}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{formation.diplome}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {formation.institut}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Formation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What About my formation ?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Formation.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {formations.map((formation, index) => (
            <ExperienceCard
              key={`formation-${index}`}
              formation={formation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Formation, "formation");