// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

// const Contact = () => {
//   const contact_info = [
//     { logo: "mail", text: "saifulislamweb87@gmail.com" },
//     { logo: "logo-whatsapp", text: "+8801874767969" },
//     {
//       logo: "location",
//       text: "demo location",
//     },
//   ];

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_6pkumtd",
//         "template_uzw5ozi",
//         form.current,
//         "Rg9Xem60tYpmHrpW1"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//           toast.success("Your message has been successfully");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-10 px-3 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           Contact <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//         <div
//           className="mt-16 flex md:flex-row flex-col
//          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
//         >
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="flex flex-col flex-1 gap-5"
//           >
//             <input
//               type="text"
//               required
//               name="from_name"
//               placeholder="Your Name"
//               className="text-gray-800"
//             />

//             <input
//               type="email"
//               name="from_email"
//               placeholder="Your Email Address"
//               className="text-gray-800"
//               required
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={10}
//               className="text-gray-800"
//             />
//             <input
//               required
//               type="submit"
//               value="Send message"
//               className="btn-primary w-fit cursor-pointer"
//             />
//           </form>
//           <div className="flex flex-col  gap-7 ">
//             <h1>----------------------</h1>
//             <h2>Address</h2>
//             <p>Khorakai,Parbotipur,Dinakpur</p>
//             <h1>Contact me directly</h1>
//             <p>+8801874767969</p>
//             <p>saifulislamweb87@gmail.com</p>
//             <h1>Check my profiles</h1>

//             <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//               <a
//                 href="https://github.com/saifulaija"
//                 className="text-gray-600 hover:text-white cursor-pointer "
//               >
//                 {" "}
//                 <FaGithubSquare></FaGithubSquare>
//               </a>
//               <a
//                 href="http://linkedin.com/in/saiful87"
//                 className="text-gray-600 hover:text-white cursor-pointer "
//               >
//                 {" "}
//                 <FaLinkedin></FaLinkedin>
//               </a>
//               <a
//                 href="https://www.facebook.com/"
//                 className="text-gray-600 hover:text-white cursor-pointer "
//               >
//                 {" "}
//                 <FaFacebookSquare></FaFacebookSquare>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pkumtd",
        "template_uzw5ozi",
        form.current,
        "Rg9Xem60tYpmHrpW1"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Your message has been sent successfully.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 md:flex justify-between items-center gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
          {/* <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5 md:w-1/2"
          >
            <input
              type="text"
              required
              name="from_name"
              placeholder="Your Name"
              className="text-gray-800"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              className="text-gray-800"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              className="text-gray-800"
            />
            <input
              required
              type="submit"
              value="Send Message"
              className="btn-primary w-fit cursor-pointer"
            />
          </form> */}

<form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5 md:w-1/2">
  <input
    type="text"
    required
    name="from_name"
    placeholder="Your Name"
    className="bg-white border border-gray-300 px-3 py-2 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500"
  />

  <input
    type="email"
    name="from_email"
    placeholder="Your Email Address"
    className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500"
  />

  <button
    type="submit"
    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
  >
    Send Message
  </button>
</form>

          <div className=" md:w-1/2 flex flex-col gap-6">
            <div className="border-b-2 border-gray-600 pb-2 mb-4">
              <h2 className="text-2xl text-cyan-600">Address</h2>
              <p>Khorakai, Parbotipur, Dinakpur</p>
            </div>
            <div className="border-b-2 border-gray-600 pb-2 mb-4">
              <h2 className="text-2xl text-cyan-600">Contact me directly</h2>
              <p className="text-center">
                {" "}
                <FaPhoneAlt className="inline-block" /> +8801874767969
              </p>
              <p className="text-center">
                <FaEnvelope className="inline-block" />{" "}
                saifulislamweb87@gmail.com
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-cyan-600 border-b-2 border-gray-600 pb-2 mb-4">
                Check my profiles
              </h2>
              <div className="mt-4 flex justify-center items-center gap-4 ">
                <a
                  href="https://github.com/saifulaija"
                  className="text-gray-400 hover:text-cyan-600"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="http://linkedin.com/in/saiful87"
                  className="text-gray-400 hover:text-cyan-600"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-gray-400 hover:text-cyan-600"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
