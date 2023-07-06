import{j as t,a as e,F as m,b as x,c as h,S as p,P as g,A as u,d as f,r as o,I as y,e as b,_ as N,R as v,B as w}from"./vendor.d5b1231f.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}};j();var d="/assets/hero.db77363d.png";const k=()=>t("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:d,alt:"",className:"md:w-11/12 h-full object-cover"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Saiful Islam"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Fullstack Developer"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),t("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:[t("a",{href:"https://github.com/saifulaija",className:"text-gray-600 hover:text-white cursor-pointer ",children:[" ",e(m,{})]}),t("a",{href:"http://linkedin.com/in/saiful87",className:"text-gray-600 hover:text-white cursor-pointer ",children:[" ",e(x,{})]}),t("a",{href:"https://www.facebook.com/",className:"text-gray-600 hover:text-white cursor-pointer ",children:[" ",e(h,{})]})]})]})})]}),S=()=>e("section",{id:"about",className:"py-10 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),t("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:t("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"Certainly! As a MERN developer, i specialize in web development using the MERN stack, which consists of MongoDB, Express.js, React.js, and Node.js. You have a strong foundation in both front-end and back-end technologies, allowing you to build dynamic and interactive web applications."}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Years experience",count:"01"},{text:"Completed Projects",count:"12"},{text:"Companies Work",count:"06"}].map(s=>t("div",{children:[t("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[s.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:s.text})]},s.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/resume.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:d,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})}),M=()=>{const i=[{logo:"logo-html5",level:"Advance",count:86},{logo:"logo-css3",level:"Expect",count:90},{logo:"logo-nodejs",level:"Beginner",count:40},{logo:"logo-react",level:"Intermediate",count:80}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((s,n)=>t("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${s.count}%,#ddd ${s.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:s.logo})})}),e("p",{className:"text-xl mt-3",children:s.level})]},n))})]})})};var A="/assets/project1.649229f4.png",_="/assets/project2.9accf616.png",E="/assets/project-3.43b7cb8d.png",I="/assets/project.30e17f2d.jpg";const R=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),t("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(p,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[g,u],children:[{img:A,name:"Toy Zone",github_link:"https://github.com/saifulaija/toys-zone-client?fbclid=IwAR0u8mbx23JWsK0jf0rl_YZCoYEAObZkV0B5Iun64aD0mkw0KAK2GbvU0Kg",live_link:"https://assignment-firebase-11.web.app/"},{img:_,name:"Sports Academy Web App",github_link:"https://github.com/saifulaija/sports-academy-client?fbclid=IwAR0H8T12J35u-RSbMcPQDqfejLtOl8mnL4vgB4oCXJy5TiNkXWiRPFxtMGQ",live_link:"https://assignment-12-new-firebase.web.app/"},{img:E,name:"Job Bazar",github_link:"https://github.com/saifulaija/job-bazar",live_link:"https://64a5800e13949d11a9e96b68--timely-bavarois-e37e00.netlify.app/"}].map((s,n)=>e(f,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:s.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:s.name}),t("div",{className:"flex gap-3",children:[e("a",{href:s.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:s.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},n))})}),e("div",{className:"lg:block hidden",children:e("img",{className:"rounded-lg",src:I,alt:""})})]})]}),C=()=>t("section",{id:"hireme",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["Hire ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),t("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[t("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),e("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6",children:"With extensive experience in building full-stack applications using the MERN stack, I possess in-depth knowledge of each component. From designing robust backend APIs using Node.js and Express.js to creating dynamic, interactive user interfaces with React.js, I am adept at delivering seamless end-to-end solutions. My expertise extends to MongoDB, allowing me to efficiently manage and integrate databases to enhance application performance.!"}),e("button",{className:"btn-primary mt-10",children:"Say Hello"})]}),e("img",{src:d,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-20 object-cover"})]})]}),P=()=>{const i=[{logo:"mail",text:"saifulislamweb87@gmail.com"},{logo:"logo-whatsapp",text:"+8801874767969"},{logo:"location",text:"demo location"}],s=o.exports.useRef();return t("section",{id:"contact",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{ref:s,onSubmit:r=>{r.preventDefault(),b.sendForm("service_6pkumtd","template_uzw5ozi",s.current,"Rg9Xem60tYpmHrpW1").then(a=>{console.log(a.text),r.target.reset(),N.success("Your message has been successfully")},a=>{console.log(a.text)})},className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",name:"from_name",placeholder:"Your Name",className:"text-gray-800"}),e("input",{type:"email",name:"from_email",placeholder:"Your Email Address",className:"text-gray-800"}),e("textarea",{name:"message",placeholder:"Your Message",rows:10,className:"text-gray-800"}),e("input",{type:"submit",value:"Send message",className:"btn-primary w-fit cursor-pointer"})]}),e("div",{className:"flex flex-col  gap-7 ",children:i.map((r,a)=>t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:r.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:r.text})]},a))})]})]}),e(y,{})]})},B=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 Saiful Islam.All Rights reserved."}),O=()=>{const[i,s]=o.exports.useState(!1),[n,r]=o.exports.useState(!1),a=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?s(!0):s(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["SAI",e("span",{className:"text-cyan-600",children:"fu"}),"l"]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:a==null?void 0:a.map((l,c)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))})}),e("div",{onClick:()=>r(!n),className:`z-[999]  ${n?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${n?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:a==null?void 0:a.map((l,c)=>e("li",{onClick:()=>r(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))})})]})})},D=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),F=()=>t("div",{children:[e(O,{}),e(D,{}),e(k,{}),e(S,{}),e(M,{}),e(C,{}),e(R,{}),e(P,{}),e(B,{})]});v.render(e(w,{children:e(F,{})}),document.getElementById("root"));