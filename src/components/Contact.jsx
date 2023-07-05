import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "saifulislamweb87@gmail.com" },
    { logo: "logo-whatsapp", text: "+8801874767969" },
    {
      logo: "location",
      text: "demo location",
    },
  ];

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
          e.target.reset()
            toast.success('Your message has been successfully')

         
        },
        (error) => {
          console.log(error.text);
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

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input type="text" name="from_name" placeholder="Your Name" className="text-gray-800" />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              className="text-gray-800"
            />
           
            <textarea name="message" placeholder="Your Message" rows={10} className="text-gray-800" />
            <input type="submit" value="Send message"  className="btn-primary w-fit cursor-pointer" />
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />;
    </section>
  );
};

export default Contact;
