import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Mee from "../assets/Mee.jpeg";
import CV from "../assets/Adam Serghini CV (3).pdf";
import { styles } from "../styles";
import { services, formations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={formation.icon}
            alt={formation.institut}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{formation.diplome}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {formation.institut}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex items-center">
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Hi im  <b>Adam Serghini</b> student developer passionate about full-stack development and
            data science. I am actively learning various programming languages,
            frameworks, as well as artificial intelligence, machine learning,
            Big Data, and Data Mining techniques. I enjoy taking on challenges
            in web application development and data analysis. Staying up-to-date
            with industry trends is essential to me. I am always looking for
            opportunities to learn and grow.
          </motion.p>
          {/* Bouton pour télécharger le CV */}
          <div className="mt-4">
            <a href={CV} download="Adam_Serghini_CV.pdf">
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none flex items-center text-white font-bold shadow-md shadow-primary"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download my CV
              </button>
            </a>
          </div>
        </div>
        <div className="ml-10">
          <img
            src={Mee}
            alt="Description de votre image"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <center>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Formation.
        </h2>
        </center>
        <VerticalTimeline>
          {formations.map((formation, index) => (
            <ExperienceCard key={`formation-${index}`} formation={formation} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");