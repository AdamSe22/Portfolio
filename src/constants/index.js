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
import Unice from "../assets/unice.png"
import Kedio from "../assets/kedio_logo - Copy (1).png"
import Prediction from "../assets/prediction.png"
import Kedio_stage from "../assets/kedio.png"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Big data",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
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
    title: "Vehicle Registration Management",
    company_name: "NARSA : End-of-Studies Internship",
    icon: Narsa,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "Development of an application for permit management and vehicle registration card consultation.",
      "Leveraging ADO for streamlined data handling and enhanced user accessibility.",
      "Facilitating seamless data management and enhanced user experience.",
    ],
  },
  {
    title: "Organized Trip Management",
    company_name: "Rissala Travel : End-of-Year Internship",
    icon: Rissala,
    iconBg: "#FFFF",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Analysis and development of an online platform integrating booking, participation in organized trips, and comprehensive trip management using Django.",
      "Exploring innovative solutions to enhance user experience and streamline travel logistics within a robust Django framework.",
    ],
  },
  {
    title: "Internship Management with AI Integration",
    company_name: "Kedio Sarl : End-of-Year Internship",
    icon: Kedio,
    iconBg: "#FFFF",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Conception and development of an internship management application with AI integration.",
      "Utilizing deep learning, NLP, LLM model, Django Rest Framework, and Vue.js.",
    ],
  }
];
const formations = [
  
  
  {
    institut : 'Université cote d’azur',
    date: '2024 - 2025',
    icon : Unice,
    iconBg: "#FFFF",
    diplome: 'Master M2 in artificial intelligence'
  },{
    institut: 'Ecole Marocaine des Sciences de l’Ingénieur',
    date: '2020 - 2025',
    icon : Emsi,
    iconBg: "#FFFF",
    diplome: 'State Engineer in Computer Science and Networks, MIAGE option'
  },{ 
    institut: 'ISTA Hay Chmaou', 
    date: '2020 - 2022', 
    iconBg: "#FFFF",
    diplome: 'Specialized Technician in Computer Development' ,
    icon : OFPPT_Logo
  },
];
const testimonials = [
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Desktop-App Embarking on the development journey of a cutting-edge car rental to facilitating seamless data management for Administrator.",
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
      "Conceiving and executing a cutting-edge online learning platform for an intelligent and personalized educational experience.",
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
    name: "Organized Trips",
    description:
      "Analysis and development of an online platform integrating booking, participation in organized trips, and comprehensive trip management.",
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
  {
    name: "Prediction and Recommendation of Future Sales for an E-commerce Site",
    description:
      "Generating personalized recommendations for clients based on their preferences and similar articles viewed.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Flask.Net",
        color: "pink-text-gradient",
      },
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "orange-text-gradient",
      },
    ],
    image: Prediction,
    source_code_link: "https://github.com/AdamSe22",
  },
  {
    name: "Internship Management with AI Integration",
    description:
      "Development of an internship management application with AI integration to help students find internships quickly based on information extracted from their CVs and to organize application requests for companies efficiently.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "LLM model",
        color: "orange-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: Kedio_stage,
    source_code_link: "https://github.com/AdamSe22",
  }
];

export { services, technologies, experiences, testimonials, projects , formations };
