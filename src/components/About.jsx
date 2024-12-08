import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Mee from "../assets/Mee.jpeg";
import CV from "../assets/Adam Serghini CV (3).pdf";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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
            Hi, I'm Adam Serghini, a software engineering student & master M2 in artificial intelligence. I am a passionate developer in full stack development and data science. I am actively learning various programming languages, frameworks, as well as artificial intelligence, machine learning, deep learning, Big Data, and Data Mining techniques. I enjoy taking on challenges in web application creation and data analysis. Staying up to date with trends is essential for me.
          </motion.p>
          {/* Button to download the CV */}
          <div className="mt-4">
            <a href={CV} download="Adam Serghini CV (2).pdf">
              <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none flex items-center text-white font-bold shadow-md shadow-primary">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                Download my CV
              </button>
            </a>
          </div>
        </div>
        <div className="ml-10">
          <img src={Mee} alt="Your image description" style={{ borderRadius: '20px' }} />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
