import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Front-End Developer",
    "UI/UX Enthusiast",
    "React & TypeScript Specialist",
    "Pixel-Perfect Coder",
  ];

const colors = ["#f8fafc", "#e2e8f0", "#cbd5e1"];
  const [index, setIndex] = useState(0);
  const [waveX, setWaveX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let x = 0;
    const interval = setInterval(() => {
      x = (x + 1) % 1000;
      setWaveX(x);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#000",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
  <section
  style={{
    position: "relative",
    minHeight: "100vh",
    padding: "6rem 5% 4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "2rem",
    overflow: "hidden",
  }}
>
  {/* Wave Background - bottom layer */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "200%",
      height: "100%",
      backgroundImage: `url('/bg_Wave.png')`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "contain",
      transform: `translateX(-${waveX}px)`,
      opacity: 0.3,
      zIndex: 0,
    }}
  />

  {/* Glowing Blob */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "600px",
      aspectRatio: "1 / 1",
      background: "linear-gradient(135deg, #4a5a4a, #bcbcbc)",
      filter: "blur(100px)",
      opacity: 0.2,
      zIndex: 0,
      borderRadius: "30% 70% 50% 50% / 30% 30% 70% 70%",
      animation: "pulseGlow 6s ease-in-out infinite",
    }}
  />

  {/* Text Content */}
<div
  style={{
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4rem",
    flexWrap: "wrap",
  }}
>
  {/* Left: Big Heading */}
<div
  style={{
    flex: "1 1 50%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }}
>
  <div style={{ width: "100%" }}>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "flex-end",
      }}
    >
      {/* Left part of heading */}
      <span
        style={{
          fontSize: "clamp(2rem, 6vw, 6rem)",
          fontWeight: "bold",
          color: "#ffffff",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          flexShrink: 1,
        }}
      >
        Turning Ideas
      </span>

      {/* Right part with Web Interfaces */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 1,
        }}
      >
        <span
          style={{
            fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
            fontWeight: "bold",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
           into Interfaces⚡ 
        </span>
      </div>
    </div>
  </div>

  {/* Optional: Inline media query for mobile tweak */}
  <style>
    {`
      @media (max-width: 600px) {
        div[style*="flex: 1 1 50%"] {
          align-items: center !important;
          text-align: start;
        }

        div[style*="display: flex;] {
          justify-content: center !important;
        }

        span {
          white-space: normal !important;
        }
      }
    `}
  </style>

 

</div>




  {/* Right: Roles on Top + Paragraph Below */}
  <div
    style={{
      flex: "1 1 50%",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      textAlign: "right",
      gap: "1rem",
    }}
  >
    {/* Animated Roles at the Top Right */}
    <div style={{ height: "3rem", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-${index * 3}rem)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {roles.map((role, i) => (
          <span
            key={i}
            style={{
              height: "3rem",
              fontSize: "clamp(1.25rem, 2vw, 2rem)",
              color: colors[i % colors.length],
              lineHeight: "3rem",
              whiteSpace: "nowrap",
              fontWeight: "bold",
              transition: "color 0.6s ease-in-out",
            }}
          >
            {role}
          </span>
        ))}
      </div>
    </div>


    {/* Paragraph Below Role */}
    <p
      style={{
        fontSize: "1.15rem",
        color: "#cbd5e1",
        lineHeight: "1.5rem",
        maxWidth: "410px",
        margin: 0,
      }}
    >
      I specialize in crafting responsive, user-centric web applications using modern technologies like React, Tailwind CSS, and more
    </p>
  </div>
</div>


<div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "0.5rem",
    height: "50px", // container height
  }}
>
  {[0, 0.2, 0.4].map((delay, index) => (
    <div
      key={index}
      style={{
        width: "4px",
        height: "10px", // base height
        background: "linear-gradient(to top, #ffffff, #d1d5db)",
        borderRadius: "8px 8px 0 0",
        animation: `powerSurge 0.8s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s infinite`,
      }}
    />
  ))}

  <style>
    {`
      @keyframes powerSurge {
        0% {
          height: 5px;
        }
        20% {
          height: 40px;
        }
        40% {
          height: 10px;
        }
        60% {
          height: 30px;
        }
        80% {
          height: 8px;
        }
        100% {
          height: 5px;
        }
      }
    `}
  </style>
</div>



  {/* Image Illustration - lower layer, but above wave */}
  {/* <img
    src="/"
    alt="Developer Illustration"
    style={{
      position: "absolute",
      bottom: "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%",
      maxWidth: "600px",
      height: "auto",
      objectFit: "contain",
      opacity: 0.3,
      zIndex: 0,
      pointerEvents: "none",
      mixBlendMode: "screen",
    }}
    loading="lazy"
  /> */}

  {/* Animation Style */}
  <style>
    {`
      @keyframes pulseGlow {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.1;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.05);
          opacity: 0.2;
        }
      }
    `}
  </style>
  
</section>


      {/* Additional Sections  */}
<section
  style={{
    padding: "4rem 5%",
    backgroundColor: "#000",
    color: "#fff",
  }}
>
 <h2
  style={{
    fontSize: "clamp(1.95rem, 5vw, 2.75rem)", // Responsive font size
    fontWeight: 600,
    color: "#e5e5e5",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    flexWrap: "wrap",
    lineHeight: 1.2,
  }}
>
  <span>Live</span>  <span>Projects</span>

  {/* <img
    src="/Triangle Flow.gif"
    alt="Divider"
    style={{
      width: "clamp(58px, 10vw, 100px)", // Responsive image width
      height: "auto",
      objectFit: "contain",
      filter: "brightness(0.8)",
    }}
  /> */}
</h2>



  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      width: "100%",
    }}
  >
    {[
  {
    id: 1,
    image: "itnt.png",
    logo: "/it.png", //  Add a logo path here
    title: "iTNT HUB Website with an innovative user interface",
    buttons: ["Html","Css", "Bootstrap", "JavaScript", "UI Testing","Frontend Developement"],
  },
  {
    id: 2,
    image: "vitti-living.png",
    logo: "/vilogo.png",
    title: "Vitti Living Website with innovative user interface",
    buttons: ["Tailwind CSS","Html","Css", "JavaScript","Frontend Developement"],
  },
  {
    id: 3,
    image: "speedexam.png",
    logo: "/speed.png",
    title: "Portfolio Site",
    buttons: ["JavaScript","Bootstrap","Html","Tailwindcss","Frontend Developement"],
  },
]

.map((project) => (
 <div
  key={project.id}
  className="project-container"
  style={{
    position: "relative",
    display: "flex",
    backgroundColor: "#141414",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "3rem",
    padding: "2rem",
    minHeight: "400px",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  }}
>

        {/* Left Column */}
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          {/* Logo + Title */}
         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
          <img
            src={project.logo}
            alt="Logo"
            style={{
              width: "auto",           
              height: "48px",           
              maxWidth: "100px",         
              objectFit: "contain",       // Prevents distortion
              borderRadius: "8px",
              backgroundColor: "#1a1a1a", // Optional: makes transparent logos look cleaner
              padding: "4px",             // Optional: adds spacing if logo has no margin
            }}
          />

          <h3 style={{ fontSize: "1.9rem", margin: 0, fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
            <span style={{ color: "#6c6c6c" }}>
              {project.title.slice(0, Math.floor(project.title.length / 2))}
            </span>
            <span style={{ color: "#fff" }}>
              {project.title.slice(Math.floor(project.title.length / 2))}
            </span>
          </h3>
        </div>

 {/* Buttons */}
<div className="button-row project-buttons" style={{ display: "flex", gap: "1rem", marginTop: "auto", flexWrap: "wrap" }}>
  {project.buttons.map((btn, i) => (
    <button
      key={i}
      style={{
        padding: "0.4rem 1rem",
        backgroundColor: "#1b1b1b",
        color: "#616161",
        border: "2px solid #5b5b5b",
        borderRadius: "999px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "#fff";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = "#616161";
        e.currentTarget.style.borderColor = "#5b5b5b";
      }}
    >
      {btn}
    </button>
  ))}
</div>

 </div>

        {/* Right: Project Image Wrapper */}
        <div
          style={{
            flex: "0 0 auto",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Mat Background Behind Image */}
          {/* <img
            src="/.gif"
            alt="Decorative background"
            style={{
              position: "absolute",
              bottom: "0px",
              right: "10px",
              width: "100%",
              height: "auto",
              opacity: 1,
              pointerEvents: "none",
              zIndex: 1,
            }}
          /> */}

 {/* Main Project Image */}
 <a
  href="/projects"
  style={{
    position: "relative",
    zIndex: 2,
    borderRadius: "12px",
    overflow: "hidden",
    display: "inline-block",
  }}
>
  <img
    src={project.image}
    alt={`Project ${project.id}`}
    style={{
      width: "600px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  />
</a>


        </div>
      </div>
    ))}
  </div>
</section>
<style>
{`
  @media (max-width: 1024px) {
    .project-container {
      flex-direction: column !important;
      padding: 1.5rem !important;
      min-height: auto !important;
      gap: 1.5rem !important;
    }

    .project-image {
      width: 100% !important;
      max-width: 100% !important;
    }

    .project-title h3 {
      font-size: 1.5rem !important;
      text-align: left;
    }

    .button-row {
      flex-wrap: wrap !important;
      justify-content: flex-start !important;
      gap: 0.75rem !important;
    }

    .project-buttons button {
      font-size: 0.95rem !important;
      padding: 0.5rem 1rem !important;
      flex: 1 1 auto !important;
    }

    .project-section {
      padding: 2.5rem 1.5rem !important;
    }

    .triangle-bg {
      display: none !important;
    }

    .project-heading {
      font-size: 2rem !important;
      flex-direction: column !important;
    }
  }

  @media (max-width: 600px) {
    .project-title h3 {
      font-size: 1.3rem !important;
    }

    .project-buttons button {
      font-size: 0.85rem !important;
      padding: 0.45rem 0.8rem !important;
    }
  }
`}
</style>

       {/* curosel slide Section */}
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
    Featured
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
        ["/card2.png","/card4.png","/card1.png", "/card7.png", "/card3.png"].map(
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
        ["/speedexam.png", "/card8.png", "/card6.png","/vitti-living.png", "/card9.png"].map(
          (src, i) => (
            <img key={`bottom-${src}-${i}`} src={src} alt="" className="slider-image" />
          )
        )
      )}
    </div>
  </div>
</section>


{/* about  */}
<section
  style={{
    minHeight: "100vh", // Changed from height
    backgroundColor: "#0b0b0b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
    position: "relative",
    flexWrap: "wrap", //  This enables wrapping on small screens
  }}
>

<div style={{
  width: "100%",
  textAlign: "center",
}}>
  <h2 style={{
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
  }}>
    A Little About Me🧑🏻‍🎓
  </h2>
</div>


  
  {/* Left Content */}
  <div style={{ width: "300px", color: "#8e8e8e" }}>
    <p style={{ fontSize: "0.95rem", marginBottom: "1rem", lineHeight: "1.5" }}>
      Experienced in crafting pixel-perfect interfaces powered by AI-enhanced workflows.
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1.5rem",
      }}
    >
      {["React", "TypeScript", "Next.js", "Tailwind", "Figma", "Framer Motion"].map((tech) => (
        <span
          key={tech}
          style={{
            padding: "0.4rem 0.75rem",
            borderRadius: "9px",
            fontSize: "0.85rem",
            border: "2px solid #2e2e2e",
          }}
        >
          {tech}
        </span>
      ))}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img src="/" alt="Code" width="20" height="20" />
        <span style={{ fontSize: "0.85rem" }}>10+ Projects</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img src="/ai-icon.svg" alt="AI" width="20" height="20" />
        <span style={{ fontSize: "0.85rem" }}>AI UI Systems</span>
      </div>
    </div>
  </div>

  {/* Center Card + Button Wrapper */}
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {/* Center Card */}
    <div
      style={{
        width: "340px",
        borderRadius: "1rem",
        overflow: "visible",
        backgroundColor: "#121212",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
        textAlign: "center",
        border: "2px solid #2c2c2c",
        padding: "1.5rem 1rem 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundImage: "url('/lp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0.75rem",
          marginBottom: "2.5rem",
          position: "relative",
        }}
      >
        <img
          src="/lp.png"
          alt="Profile"
          style={{
            position: "absolute",
            bottom: "-36px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "72px",
            height: "72px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid #facc15",
            backgroundColor: "#121212",
          }}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "0.4rem" }}>
          Lok Prasanth
        </h3>
        <p style={{ fontSize: "0.95rem", color: "#8e8e8e" }}>
          Alamanda
        </p>
      </div>
    </div>

    {/* Button Outside the Card */}
<button
  style={{
    marginTop: "1.2rem",
    padding: "0.6rem 1.5rem",
    backgroundColor: "#facc15",
    border: "none",
    borderRadius: "0.5rem",
    color: "#121212",
    fontWeight: "bold",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#eab308")}
  onMouseOut={(e) => (e.target.style.backgroundColor = "#facc15")}
  onClick={() => (window.location.href = "/about")}
>
  Know More
</button>


    
  </div>

  {/* Right Content */}
  <div style={{ width: "300px", color: "#eee", display: "flex", flexDirection: "column", gap: "1rem" }}>
    {/* Qualification */}
   <div
  style={{
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    gap: "1rem",
  }}
>
  {/* Left: Logo */}
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtgdWCA707yr610ic3xodtMoX598W--T9ZQ&s" // 👈 make sure this image is in your public folder
    alt="Raghu College Logo"
    style={{
      width: "50px",
      height: "78px",
      objectFit: "contain",
      borderRadius: "0.5rem",
      padding: "4px",
    }}
  />

  {/* Right: Education Info */}
  <div>
    <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#fff" }}>BTech @ REC</h4>
    <p style={{ fontSize: "0.85rem", color: "#8e8e8e" }}>Mech</p>
  </div>
</div>


    {/* Work Experience */}
    <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottom: "1px solid #2c2c2c",
    gap: "1rem",
  }}
>
  {/* Left big number */}
  <div style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#fff", lineHeight: 1 }}>
    1+
  </div>

  {/* Right content */}
  <div>
    <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#8e8e8e" }}>Years of work Experience</h2>
  </div>
</div>


    {/* Skills Auto-Scroll */}
   <div
  style={{
    padding: "1rem",
    overflow: "hidden",
    position: "relative",
  }}
>
  <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#8e8e8e" }}>
  Tools I Master
  </h4>

  <div
    style={{
      display: "flex",
      gap: "2rem",
      overflowX: "auto",
      paddingBottom: "0.5rem",
      animation: "scrollSkills 5s linear infinite",
      scrollbarWidth: "none",
    }}
  >
    {[...Array(2)].flatMap(() =>
      [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Jest", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ].map((skill, index) => (
        <img
          key={`${skill.name}-${index}`}
          src={skill.img}
          alt={skill.name}
          title={skill.name}
          style={{
            width: "36px",          // ⬅️ Smaller size
            height: "36px",         // ⬅️ Smaller size
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            backgroundColor: "transparent",
            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.2))",
          }}
        />
      ))
    )}
  </div>

  <style>
    {`
      @keyframes scrollSkills {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      div::-webkit-scrollbar {
        display: none;
      }
      div {
        scrollbar-width: none;
      }
    `}
  </style>
</div>

  </div>

  {/* Inline Keyframes + Scrollbar Hide */}
  <style>
    {`
      @keyframes scrollSkills {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      div::-webkit-scrollbar {
        display: none;
      }
      div {
        scrollbar-width: none;
      }
    `}
  </style>
  
</section>



{/* Contact Section */}
<section
  style={{
    padding: "4rem 5%",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(1.95rem, 5vw, 2.75rem)",
      fontWeight: 600,
      marginBottom: "1rem",
      color: "#e5e5e5",
    }}
  >
    Let's Collaborate
  </h2>

  <p
    style={{
      fontSize: "1.1rem",
      color: "#cbd5e1",
      maxWidth: "700px",
      margin: "0 auto 2rem",
      lineHeight: "1.8",
    }}
  >
    Whether you're building a new product or redesigning an old one,
    I'm excited to bring your vision to life. Let's build something
    exceptional together.
  </p>

  <a
    href="mailto:your.email@example.com"
    style={{
      padding: "0.85rem 2rem",
      backgroundColor: "#facc15",
      color: "#000",
      borderRadius: "999px",
      fontWeight: 600,
      textDecoration: "none",
      fontSize: "1rem",
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#eab309")}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#facc15")}
  >
    Say Hello 👋🏻
  </a>
</section>







    </main>
  );
}
