// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/project1.png";
// import project2 from "../assets/images/project2.png";
// import project3 from "../assets/images/project-3.png";
// import project4 from "../assets/images/job-swift.png";

// import hero from "../assets/images/project.jpg";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

// const Project = () => {
//   const projects = [
//     {
//       img: project4,
//       name: "Job Swift",
//       github_link: "https://github.com/developerMasum/Job-Swift/tree/main/",
//       live_link: "https://job-swift-git-masum-developermasum.vercel.app/",
//     },
//     {
//       img: project1,
//       name: "Toy Zone",
//       github_link:
//         "https://github.com/saifulaija/toys-zone-client?fbclid=IwAR0u8mbx23JWsK0jf0rl_YZCoYEAObZkV0B5Iun64aD0mkw0KAK2GbvU0Kg",
//       live_link: "https://assignment-firebase-11.web.app/",
//     },
//     {
//       img: project2,
//       name: "Sports Academy Web App",
//       github_link:
//         "https://github.com/saifulaija/sports-academy-client?fbclid=IwAR0H8T12J35u-RSbMcPQDqfejLtOl8mnL4vgB4oCXJy5TiNkXWiRPFxtMGQ",
//       live_link: "https://assignment-12-new-firebase.web.app/",
//     },
//     {
//       img: project3,
//       name: "Job Bazar",
//       github_link: "https://github.com/saifulaija/job-bazar",
//       live_link:
//         "https://64a5800e13949d11a9e96b68--timely-bavarois-e37e00.netlify.app/",
//     },
//   ];
//   return (
//     <section id="projects" className="py-10 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Projects</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
//       </div>
//       <br />
//       <div className=" gap-6 px-5 mx-auto container">
//         <div className="lg:w-2/3 w-full">
//           <Swiper
//             slidesPerview={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               768: {
//                 slidesPerView: 2,
//               },
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Autoplay]}
//           >
//             {projects.map((project_info, i) => (
//               <SwiperSlide key={i}>
//                 <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
//                   <img src={project_info.img} alt="" className="rounded-lg" />
//                   <h3 className="text-xl my-4">{project_info.name}</h3>
//                   <div className="flex gap-3">
//                     <a
//                       href={project_info.github_link}
//                       target="_blank"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Github
//                     </a>
//                     <a
//                       href={project_info.live_link}
//                       target="_blank"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/images/project1.png";
 import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/final-job-swift.jpg";


const projects = [
  {
    img: project4,
    name: "Job Swift(ATS based Website)",
    github_link: "https://github.com/developerMasum/Job-Swift/tree/main/",
    live_link: "https://job-swift-git-masum-developermasum.vercel.app/",
  },
  {
    img: project1,
    name: "Toy Zone(MERN Website)",
    github_link:
      "https://github.com/saifulaija/toys-zone-client?fbclid=IwAR0u8mbx23JWsK0jf0rl_YZCoYEAObZkV0B5Iun64aD0mkw0KAK2GbvU0Kg",
    live_link: "https://assignment-firebase-11.web.app/",
  },
  {
    img: project2,
    name: "Sports Academy(E-Commerce Website) ",
    github_link:
      "https://github.com/saifulaija/sports-academy-client?fbclid=IwAR0H8T12J35u-RSbMcPQDqfejLtOl8mnL4vgB4oCXJy5TiNkXWiRPFxtMGQ",
    live_link: "https://assignment-12-new-firebase.web.app/",
  },
  {
    img: project3,
    name: "Job Bazar (REACT)",
    github_link: "https://github.com/saifulaija/job-bazar",
    live_link:
      "https://64a5800e13949d11a9e96b68--timely-bavarois-e37e00.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-10 bg-gray-800">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-cyan-600">
          Explore My Projects
        </h3>
        <p className="text-lg mt-2 text-gray-600">
          Check out some of my awesome work.
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl text-gray-800 font-semibold mb-2">
                    {project.name}
                  </h3>
                  <div className="flex justify-between">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-600 hover:text-cyan-700"
                    >
                      <FaGithub className="mr-1" />
                      GitHub
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-600 hover:text-cyan-700"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default Project;
