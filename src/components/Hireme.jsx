// import React from "react";

// import Lottie from "lottie-react";
// import image from "../assets/images/animation_lmuorkff.json";

// const Hireme = () => {
//   return (
//     <section id="hireme" className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:p-10">
//         <div className="md:w-1/2">
//           <div className="text-center mb-4">
//             <h2 className="text-4xl font-semibold text-cyan-600">Hire Me</h2>
//             <p className="text-gray-400 mt-1 text-lg">Do you have any work?</p>
//           </div>
//           <div className="bg-gray-800 rounded-2xl ">
//             <h3 className="text-2xl font-semibold text-white">
//               Looking for a Skilled Developer?
//             </h3>
//             <p className="text-gray-300 mt-2 text-lg leading-7">
//               I have extensive experience in building full-stack applications
//               using the MERN stack. My expertise spans from designing robust
//               backend APIs with Node.js and Express.js to creating dynamic and
//               interactive user interfaces using React.js. I am proficient in
//               integrating and managing MongoDB databases to enhance application
//               performance.
//             </p>
//             <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 mt-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//               Let's Connect
//             </button>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 mt-8 md:mt-0">
//           <Lottie animationData={image} loop={true} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hireme;


import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/images/animation_lmuorkff.json";

const Hireme = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section id="hireme" className="bg-cyan-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-semibold">Hire Me</h2>
            <p className="text-gray-300 mt-2 text-lg">
              Looking for a skilled developer?
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 mt-4 text-lg leading-7">
              I have extensive experience in developing full-stack applications
              using the MERN stack. My expertise ranges from designing robust
              backend APIs with Node.js and Express.js to creating dynamic and
              interactive user interfaces with React.js. I am proficient in
              integrating and managing MongoDB databases to enhance application
              performance.
            </p>
            <button onClick={scrollToContact} className="btn-primary mt-8">
              Let's Connect
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hireme;

