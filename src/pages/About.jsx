import { useEffect, useRef } from "react";

function About() {
  const skills = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    {name: "Tailwind CSS",img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    {name: "HTML5",img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
    {name: "CSS3",img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
    {name: "Microsoft Excel",img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg"},
    // { name: "Jest", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    // { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ];

 const scrollRef = useRef(null);

useEffect(() => {
  const el = scrollRef.current;
  let animationFrame;

  const scroll = () => {
    if (el) {
      el.scrollLeft += 1;

      // Reset when halfway to create seamless scroll
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    animationFrame = requestAnimationFrame(scroll);
  };

  animationFrame = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrame);
}, []);


  return (
    <section className="min-h-screen bg-black text-white p-4 pt-16 sm:p-6 max-w-7xl mx-auto space-y-10">
      {/* Top Section: Intro + Image */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1 text-left space-y-9">
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Lok Prasanth</h1>
          <p className="text-gray-400 text-base md:text-lg">
            A front-end developer passionate about building seamless digital experiences using React, Tailwind CSS, and modern web technologies. My goal is to turn designs into pixel-perfect, accessible, and performant interfaces.
          </p>
          <button className="relative inline-flex items-center gap-2 px-6 py-2 rounded-lg text-green-300 font-medium bg-green-900/20 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            Open to Work
          </button>
        </div>

        {/* Image Stack */}
       <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[36rem] xl:h-[36rem] mt-7 lg:mt-10">
  {/* Back Left Image */}
  <img
    src="/pic.jpeg"
    alt="Back Left"
    className="absolute top-6 left-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 rounded-xl object-cover shadow-lg transition-transform duration-500 hover:-rotate-12"
  />

  {/* Back Right Image */}
  <img
    src="/pic3.jpeg"
    alt="Back Right"
    className="absolute top-6 right-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 rounded-xl object-cover shadow-lg transition-transform duration-500 hover:rotate-12"
  />

  {/* Front Center Image */}
  <img
    src="/pic1.jpeg"
    alt="Front Center"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-52 lg:w-64 xl:w-72 rounded-3xl object-cover shadow-xl transition-transform duration-500 sm:hover:-hue-rotate-180 md:hover:-hue-rotate-180  lg:hover:-hue-rotate-180 "
  />
</div>

      </div>

      {/* What I Bring Title */}
      <h2 className="text-4xl font-bold text-left">What I Bring to the Table</h2>

      {/* Why Me */}
      <div className="text-left">
        <h3 className="text-xl font-medium text-gray-300 mb-2">Why I Am the Developer You Need</h3>
      </div>

      {/* Experience / Skills / Domains */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Experience + Skills */}
        <div className="flex flex-col gap-6">
          {/* Experience */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow text-left">
              <h4 className="text-3xl font-bold text-white">1+</h4>
              <p className="text-gray-400 mt-1 text-sm">Years of Work Experience</p>
            </div>
            <div className="flex-1 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow text-left">
              <h4 className="text-3xl font-bold text-white">3+</h4>
              <p className="text-gray-400 mt-1 text-sm">Projects Contribution</p>
            </div>
          </div>

          {/* Skills */}
        <div ref={scrollRef}
            className="flex gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
          >
            {/* Duplicate the skills content once to enable seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-4 py-2 rounded-lg min-w-max"
              >
                <img src={skill.img} alt={skill.name} className="h-8 w-8 mb-1" />
                <span className="text-xs text-white">{skill.name}</span>
              </div>
            ))}
          </div>


        </div>

        {/* Right: Domain Knowledge */}
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow">
          <h3 className="text-xl font-semibold text-gray-300 mb-4 text-left">Industry & Domain Knowledge</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-400">
            {[
             "Responsive Design", "Web Accessibility", "UI/UX", "Git & GitHub", "REST APIs", "State Management", 
             "Version Control","Figma to Code", "API Integration","Testing", "Performance Optimization",
             "CI/CD", "Browser Compatibility", "Soft Skills", "Agile & Scrum", "Deployment", "And many more"
            ].map((item, index) => (
              <span
                key={index}
                className={`px-3 py-2 rounded-lg text-center shadow-sm ${item !== "And many more" ? "bg-[#141414] border border-[#393939]" : ""}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section
  style={{
    position: "relative",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
    padding: "2rem 0", // some top and bottom padding
  }}
>
  <style>
    {`
      @keyframes slideRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      @keyframes slideLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .slider-row {
        display: flex;
        gap: 1rem;
        width: max-content;
      }
      .slider-image {
        width: 60vw;
        max-width: 300px;
        height: 30vh;
        object-fit: cover;
        flex-shrink: 0;
        border-radius: 8px;
      }

      .blur-overlay {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80px;
        z-index: 1;
        pointer-events: none;
      }
      .blur-left {
        left: 0;
        background: linear-gradient(to right, #000, transparent);
      }
      .blur-right {
        right: 0;
        background: linear-gradient(to left, #0a0a0a, transparent);
      }
    `}
  </style>

  {/* Section Header */}
  <h2
  style={{
    fontSize: "clamp(1.95rem, 5vw, 2.75rem)",
    fontWeight: 600,
    color: "#e5e5e5",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    flexWrap: "wrap",
    lineHeight: 1.2,
    position: "relative",
    height: "120px", // enough space for both
  }}
>
  {/* TEXT - Top Projects */}
  <span
    style={{
      animation: "showText 6s linear infinite",
      position: "absolute",
    }}
  >
    Achievments
  </span>

  {/* ⚡ POWER ICON */}
  <div
    style={{
      position: "absolute",
      animation: "showPowerIcon 6s linear infinite",
    }}
  >
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="#ffffff"
    >
      <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
    </svg>
  </div>

  <style>
    {`
      @keyframes showText {
        0% { opacity: 1; transform: scale(1); }
        30% { opacity: 1; }
        40% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 0; }
      }

      @keyframes showPowerIcon {
        0%, 40% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
        80% { opacity: 1; }
        100% { opacity: 0; transform: scale(0.5); }
      }
    `}
  </style>
</h2>


  {/* Left and Right Blur Corners */}
  <div className="blur-overlay blur-left" />
  <div className="blur-overlay blur-right" />

  {/* Top Slider - left to right */}
  <div
    style={{
      overflow: "hidden",
      marginBottom: "0.5rem",
      height: "30vh",
      position: "relative",
      zIndex: 0,
    }}
  >
    <div
      className="slider-row"
      style={{
        animation: "slideRight 35s linear infinite",
      }}
    >
      {[...Array(2)].flatMap(() =>
        ["/pic.jpeg","/pic1.jpeg","/pic.jpeg", "/pic.jpeg", "/pic.jpeg"].map(
          (src, i) => (
            <img key={`top-${src}-${i}`} src={src} alt="" className="slider-image" />
          )
        )
      )}
    </div>
  </div>

  {/* Bottom Slider - right to left */}
  <div
    style={{
      overflow: "hidden",
      height: "30vh",
      position: "relative",
      zIndex: 0,
    }}
  >
    <div
      className="slider-row"
      style={{
        animation: "slideLeft 20s linear infinite",
      }}
    >
      {[...Array(2)].flatMap(() =>
        ["/pic.jpeg", "/pic.jpeg", "/card6.png","/pic.jpeg", "/card9.png"].map(
          (src, i) => (
            <img key={`bottom-${src}-${i}`} src={src} alt="" className="slider-image" />
          )
        )
      )}
    </div>
  </div>
</section>


      {/* Balance Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-10 text-center">
        <img src="work.png" alt="balance icon" className="w-32 sm:w-60 h-auto object-contain" />
        <p className="text-white text-[24px] sm:text-[30px] font-medium leading-[1.4] font-[Poppins]">
          BALANCE
        </p>
      </div>
    </section>
  );
}

export default About;
