// import React from "react";

// const Skills = () => {
//   const skills = [
//     {
//       logo: "logo-html5",
//       level: "Advance",
//       count: 86,
//     },
//     {
//       logo: "logo-css3",
//       level: "Expect",
//       count: 90,
//     },
//     {
//       logo: "logo-nodejs",
//       level: "Beginner",
//       count: 40,
//     },
//     {
//       logo: "logo-react",
//       level: "Intermediate",
//       count: 80,
//     },
//   ];
//   return (
//     <section id="skills" className="py-10 bg-gray-800 relative">
//       <div className="mt-8 text-gray-100 text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Skills</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
//         <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
//           {skills?.map((skill, i) => (
//             <div
//               key={i}
//               className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
//             >
//               <div
//                 style={{
//                   background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
//                 }}
//                 className="w-32 h-32 flex items-center justify-center rounded-full"
//               >
//                 <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
//                   <ion-icon name={skill.logo}></ion-icon>
//                 </div>
//               </div>
//               <p className="text-xl mt-3">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React from 'react';

// import htm from '../assets/images/icons8-html-5-96.png'
// import css from '../assets/images/icons8-css3-96.png'
// import bootstrap from '../assets/images/icons8-bootstrap-96.png'
// import tailwind from '../assets/images/icons8-tailwindcss-96.png'
// import javaScript from '../assets/images/icons8-javascript-96.png'
// import react from '../assets/images/icons8-react-native-96.png'
// import node from '../assets/images/icons8-nodejs-96.png'
// import mongodb from '../assets/images/icons8-mongodb-96.png'
// import vsCode from '../assets/images/icons8-visual-studio-96.png'
// import npm from '../assets/images/icons8-npm-96.png'
// import github from '../assets/images/icons8-github.gif'
// import api from '../assets/images/icons8-rest-api-96.png'

// const Skills = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import { Fade } from 'react-reveal';

import htm from '../assets/images/icons8-html-5-96.png';
import css from '../assets/images/icons8-css3-96.png';
import bootstrap from '../assets/images/icons8-bootstrap-96.png';
import tailwind from '../assets/images/icons8-tailwindcss-96.png';
import javaScript from '../assets/images/icons8-javascript-96.png';
import react from '../assets/images/icons8-react-native-96.png';
import node from '../assets/images/icons8-nodejs-96.png';
import mongodb from '../assets/images/icons8-mongodb-96.png';
import vsCode from '../assets/images/icons8-visual-studio-96.png';
import npm from '../assets/images/icons8-npm-96.png';
import github from '../assets/images/icons8-github.gif';
import api from '../assets/images/icons8-rest-api-96.png';

const skillsData = [
  { icon: htm, title: 'HTML5' },
  { icon: css, title: 'CSS3' },
  { icon: bootstrap, title: 'Bootstrap' },
  { icon: tailwind, title: 'Tailwind CSS' },
  { icon: javaScript, title: 'JavaScript' },
  { icon: react, title: 'React' },
  { icon: node, title: 'Node.js' },
  { icon: mongodb, title: 'MongoDB' },
  { icon: vsCode, title: 'Visual Studio Code' },
  { icon: npm, title: 'npm' },
  { icon: github, title: 'GitHub' },
  { icon: api, title: 'REST API' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-cyan-600 mb-6">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill, index) => (
            <Fade key={index} delay={index * 200}>
              <div className="flex flex-col items-center text-gray-500 p-4 rounded-md">
                <img src={skill.icon} alt={skill.title} className="w-16 h-16 mb-2" />
                <p className="text-center text-gray-300">{skill.title}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

