import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant  } from "../utils/motion";
import { styles } from "../styles";
const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1.5px] rounded-[20px] shadow-card '
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
  
const Services = () => (
    <div>
        <center>
            <h3 className={`text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] text-center`}>
                My Professional Skills
            </h3>
        </center>
        <div className="mt-20 flex flex-wrap gap-10 ml-28">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </div>
);

export default Services;