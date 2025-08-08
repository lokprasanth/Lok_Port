import { useEffect, useRef } from "react";

function About() {
  const skills = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Jest", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (el) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
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
    src="/lp.png"
    alt="Back Left"
    className="absolute top-6 left-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 rounded-xl object-cover shadow-lg transition-transform duration-500 hover:-rotate-12"
  />

  {/* Back Right Image */}
  <img
    src="/lp.png"
    alt="Back Right"
    className="absolute top-6 right-0 w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 rounded-xl object-cover shadow-lg transition-transform duration-500 hover:rotate-12"
  />

  {/* Front Center Image */}
  <img
    src="/lp.png"
    alt="Front Center"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-52 lg:w-64 xl:w-72 rounded-xl object-cover shadow-xl transition-transform duration-500 hover:rotate-6"
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
              <h4 className="text-3xl font-bold text-white">5+</h4>
              <p className="text-gray-400 mt-1 text-sm">Projects Contribution</p>
            </div>
          </div>

          {/* Skills */}
         <div ref={scrollRef}
              className="flex gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
            >
              {skills.map((skill, index) => (
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
              "Pharma", "SAAS", "Education", "IT", "Behavioral Science", "AI", "Real Estate",
              "E-Commerce", "Beauty", "Fashion", "FMCG", "Digital Marketing",
              "CMS", "Marketing", "And many more"
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
