import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import COMINGSOON from "../assets/projects/comingsoon.png"

export const HERO_CONTENT = `I'm a third-year Computer Engineering student at Toronto Metropolitan University, specializing in Software Engineering. With a strong foundation in full-stack development, I blend expertise in front-end and back-end programming with a deep understanding of hardware systems. My passion lies in crafting innovative solutions that merge creativity and technology to make a tangible impact. I aim to contribute to projects that push boundaries, foster innovation, and create meaningful change in the engineering world. Welcome to my space, where ideas meet execution!`;

export const ABOUT_TEXT = `As a Computer Engineering student, I’m passionate about exploring new concepts and pushing boundaries. I’m particularly drawn to Artificial Intelligence, Machine Learning, and the mathematical principles that underpin technological innovation. I have a deep appreciation for the elegance and versatility of mathematics, from the abstract to the applied, and I relish exploring how diverse mathematical frameworks shape problem-solving and system design. I’m also captivated by Embedded Systems Engineering, where hardware and software converge to create transformative solutions. These fields fuel my curiosity and inspire me to innovate.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Posture Correction AI",
    image: COMINGSOON,
    description:
      "A real-time posture correction application that provides live feedback and user alerts by tracking body posture and detecting deviations to promote better ergonomics during work.",
    technologies: ["Python", "Mediapipe", "OpenCV"],
    
  },
  {
    title: "Central Processing Unit",
    image: COMINGSOON,
    description:
      "Three distinct general processing units designed to perform advanced logic functions and arithmetic operations, including parity checking, bit rotation, and input comparisons, optimized for efficiency and implemented on FPGA.",
    technologies: ["VHDL", "Quartus II"],
  },
  {
    title: "Portfolio Website",
    image: COMINGSOON,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
  {
    title: "Banking Application",
    image: COMINGSOON,
    description:
      "A comprehensive banking system with secure transaction handling, administrative controls, and a user-friendly interface for smooth interactions and improved usability.",
    technologies: ["Java", "JavaFX", "FMXL Scene Builder"],
  },

  {
    title: "Library Database System",
    image: COMINGSOON,
    description:
      "A library system with a database for admins and borrowers, supporting the management of loans, books, authors, and genres.",
    technologies: ["SQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
