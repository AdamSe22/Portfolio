import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import OFPPT_Logo from "../assets/company/OFPPT_Logo.png"
import Narsa from "../assets/company/Logo-ANSR.png"
import Emsi from "../assets/company/OIP.jpg"
import Rissala from "../assets/company/Rissala.jpeg"
import Jquerry from "../assets/tech/Jquerry.png"
import Django from "../assets/tech/Django-Logo.png"
import Cars from "../assets/Cars2.png"
import Learn from "../assets/E-learn.jpg"
import Riss from "../assets/Riss.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Jquerry",
    icon: Jquerry,
  },
  {
    name: "Django",
    icon: Django,
  },
  
];

const experiences = [
  {
    title: "Ado.Net | Desktop Application",
    company_name: "ISTA Hay chmaou : Final Year Project",
    icon: OFPPT_Logo,
    iconBg: "#FFFF",
    date: "March 2022 - April 2022",
    points: [
      "Development of a car rental application using ADO.",
      "Embarking on the development journey of a cutting-edge car rental application integrated with ADO.Net",
      "facilitating seamless data management for Administrator.",
    ],
  },
  {
    title: "Ado.Net | Desktop Application",
    company_name: "NARSA : End-of-Studies Internship",
    icon: Narsa,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "Development of an application for permit management and vehicle registration card consultation.",
      " leveraging ADO  for streamlined data handling and enhanced user accessibility.",
      "facilitating seamless data management and enhanced user experience.",
      
    ],
  },
  {
    title: "Django | Web Application",
    company_name: "Emsi : End-of-Year Project",
    icon: Emsi,
    iconBg: "#FFFF",
    date: "April 2023 - Jan 2023",
    points: [
      "Design and implementation of an online learning platform using Django and Machine Learning.",
      "Conceiving and executing a cutting-edge online learning platform.",
      "harnessing the power of Django and Machine Learning for an intelligent and personalized educational experience.",
    ],
  },
  {
    title: "Django | Web Application",
    company_name: "Rissala Travel : End-of-Year Internship ",
    icon: Rissala,
    iconBg: "#FFFF",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Analysis and development of an online platform integrating booking, participation in organized trips, and comprehensive trip management using Django.",
      "Exploring innovative solutions to enhance user experience and streamline travel logistics within a robust Django framework.",
      
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Desktop-App Embarking on the development journey of a cutting-edge car rental to facilitating seamless data management for Administrator. ",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "Ado.Net",
        color: "pink-text-gradient",
      },
    ],
    image: Cars,
    source_code_link: "https://github.com/AdamSe22",
  },
  {
    name: "E-Learning",
    description:
      "Conceiving and executing a cutting-edge online learning platform  for an intelligent and personalized educational experience",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "red-text-gradient",
      },
      {
        name: "Google Api",
        color: "blue-text-gradient",
      },
    ],
    image: Learn,
    source_code_link: "https://github.com/AdamSe22",
  },
  {
    name: "organized trips",
    description:
      "Analysis and development of an online platform integrating booking, participation in organized trips, and comprehensive trip management .",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Html",
          color: "orange-text-gradient",
        },
        
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Java Script",
          color: "green-text-gradient",
        },
        {
          name: "Boostrap",
          color: "pink-text-gradient",
        },
        {
          name: "Google Api",
          color: "blue-text-gradient",
        },
      ],
    image: Riss,
    source_code_link: "https://github.com/AdamSe22",
  },
];

export { services, technologies, experiences, testimonials, projects };
