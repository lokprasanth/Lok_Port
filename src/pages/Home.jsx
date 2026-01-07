import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const roles = [
    "Front-End Developer",
    "UI/UX Enthusiast",
    "React & TypeScript Specialist",
    "Pixel-Perfect Coder",
  ];

  const colors = ["#f8fafc", "#e2e8f0", "#cbd5e1"];
  const [index, setIndex] = useState(0);
  const [waveX, setWaveX] = useState(0);

  // Hero slides
  const slides = [
    {
      bg: "head.jpg",
      heading: "Turning Ideas",
      subHeading: "into Interfaces💡",
      description:
        "I craft responsive, user-centric web applications using modern technologies like React, Tailwind CSS, and more",
    },
    {
      bg: "runway.png",
      heading: "Creative Designs",
      subHeading: "for Web & Mobile",
      description:
        "Designing seamless experiences with a focus on UI/UX and modern trends",
    },
    {
      bg: "Vilot.png",
      heading: "Performance Focused",
      subHeading: "Optimized Apps",
      description:
        "Building high-performance applications that users love",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change role every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Wave animation
  useEffect(() => {
    let x = 0;
    const interval = setInterval(() => {
      x = (x + 1) % 1000;
      setWaveX(x);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Hero slide animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

// Carousel functionality
 useEffect(() => {
  const carousel = document.getElementById("carousel-container");
  const textCarousel = document.getElementById("carousel-texts");

  const boxes = Array.from(carousel.getElementsByClassName("carousel-box"));
  const texts = Array.from(textCarousel.children);

  const indicator = document.getElementById("indicator");
  let currentIndex = 0;

  const updateCarousel = () => {
    const gap = parseInt(getComputedStyle(carousel).gap); 
    const boxWidth = boxes[0].offsetWidth + gap;

    // Move image slider
    carousel.style.transform = `translateX(${-currentIndex * boxWidth}px)`;

    // Move text slider
    textCarousel.style.transform = `translateX(${-currentIndex * boxWidth}px)`;

    // Indicator
    indicator.style.left = (currentIndex * 100) / boxes.length + "%";

    // Scale + Compensation shift
    boxes.forEach((box, idx) => {
      if (idx === currentIndex) {
        box.style.transform = "scale(1) translateX(20px)"; 
      } else {
        box.style.transform = "scale(1)";
      }
    });

    // Text highlight
    texts.forEach((txt, idx) => {
      txt.style.opacity = idx === currentIndex ? "1" : "0.3";
      txt.style.transform = idx === currentIndex ? "scale(1.05)" : "scale(1)";
      txt.style.transition = "all 0.4s ease";
    });
  };

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.onclick = () => {
    currentIndex = currentIndex === 0 ? boxes.length - 1 : currentIndex - 1;
    updateCarousel();
  };

  nextBtn.onclick = () => {
    currentIndex = currentIndex === boxes.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  };

  updateCarousel();

  // REMOVE AUTOPLAY  
  return () => {};
}, []);



// Certificates 
useEffect(() => {
  const certificates = [
    { img: "/cert2.png", title: "FullStack" },
    { img: "/cert1.png", title: "Marketing" },
    { img: "/cert4.png", title: "Data Analyst" },
    { img: "/cert5.png", title: "Excel" },
    { img: "/cert6.png", title: "Python" },

  ];

  let currentCert = 0;

  const certImg = document.getElementById("cert-img");
  const thumbImg = document.getElementById("cert-thumb");
  const certTitle = document.getElementById("cert-title");

  const prevBtn = document.getElementById("prev-cert");
  const nextBtn = document.getElementById("next-cert");

  const updateCert = (index) => {
    certImg.style.opacity = "0";
    thumbImg.style.opacity = "0";
    setTimeout(() => {
      certImg.src = certificates[index].img;
      thumbImg.src = certificates[(index + 1) % certificates.length].img; // next thumbnail
      certTitle.textContent = certificates[index].title;
      certImg.style.opacity = "1";
      thumbImg.style.opacity = "1";
    }, 200);
  };

  prevBtn.onclick = () => {
    currentCert = currentCert === 0 ? certificates.length - 1 : currentCert - 1;
    updateCert(currentCert);
  };

  nextBtn.onclick = () => {
    currentCert = currentCert === certificates.length - 1 ? 0 : currentCert + 1;
    updateCert(currentCert);
  };

  // initialize
  updateCert(currentCert);
}, []);


  return (
    <main style={{ fontFamily: "Segoe UI, sans-serif" }}>
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
        {/* Slide Backgrounds */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1s ease-in-out",
              opacity: idx === currentSlide ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        {/* Wave Background */}
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
            zIndex: 0.5,
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
            zIndex: 0.5,
            borderRadius: "30% 70% 50% 50% / 30% 30% 70% 70%",
            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />

        {/* Hero Text */}
        <div
          style={{
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Heading */}
          <div
            style={{
              flex: "1 1 50%",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 6vw, 6rem)",
                fontWeight: "bold",
                color: "#ffffff",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              {slides[currentSlide].heading}
            </h1>
            <h2
              style={{
                fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                fontWeight: "bold",
                color: "#ffffff",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              {slides[currentSlide].subHeading}
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#cbd5e1",
                lineHeight: "1.5rem",
                maxWidth: "450px",
                marginTop: "1rem",
              }}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Right: Roles */}
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

      {/* Scrolling Banner */}
   <div
  style={{
    position: "relative",
    width: "100%",
    height: "80px",
    overflow: "hidden",
    borderRadius: "6px",
    background: "transparent",
  }}
>
  <div
    className="logo-track"
    style={{
      position: "absolute",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      animation: "slideBanner 30s linear infinite", // slower speed
      fontSize: "1.5rem",
      fontWeight: "700",
      fontFamily: "sans-serif",
    }}
  >
    {/* Text logos with unique hover colors */}
    <span className="logo-text ldev">LDEV</span>
    <span className="logo-text zaalima">Zaalima</span>
    <span className="logo-text nextgen">Freelancer</span>
    <span className="logo-text techcorp"></span>

    {/* duplicate for seamless scroll */}
    <span className="logo-text ldev">LDEV</span>
    <span className="logo-text zaalima">Zaalima</span>
    <span className="logo-text nextgen">Freelancer</span>
    <span className="logo-text techcorp"></span>
  </div>

  <style>
    {`
      /* Default grayscale color */
      .logo-text {
        color: #555;
        transition: color 0.3s ease;
        cursor: default;
      }

      /* Individual hover colors */
      .logo-text.ldev:hover { color: #1DA1F2; }       /* Blue */
      .logo-text.zaalima:hover { color: #fff;} 
      .logo-text.nextgen:hover { color: #32CD32; }   /* Lime green */
      .logo-text.techcorp:hover { color: #FFD700; }  /* Gold */

      /* Scroll animation */
      @keyframes slideBanner {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</div>




{/* about  */}
<section
  style={{
    minHeight: "100vh",
    backgroundColor: "#000",
    backgroundImage: "url('/light.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
    position: "relative",
    flexWrap: "wrap",
  }}
>
  <div style={{ width: "100%", textAlign: "center" }}>
    <h2
      style={{
        color: "#fff",
        fontSize: "2rem",
        fontWeight: "bold",
        margin: 0,
      }}
    >
    A Little About Me
    </h2>
  </div>

  {/* Left Content */}
  <div
    style={{
      width: "300px",
      color: "#8e8e8e",
      flex: "1 1 250px", // Flex-grow and min-width for mobile
    }}
  >
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
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
          alt="Projects"
          width="20"
          height="20"
        />
        <span style={{ fontSize: "0.85rem" }}>3+ Projects</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="AI Face Logo"
          width={24}
          height={24}
        />
        <span style={{ fontSize: "0.85rem" }}>AI UI Systems</span>
      </div>
    </div>
  </div>

  {/* Center Card + Button Wrapper */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "1 1 300px",
    }}
  >
    {/* Center Card */}
    <div
      style={{
        width: "340px",
        maxWidth: "100%",
        // borderRadius: "1rem",
        // overflow: "visible",
        // backgroundColor: "#121212",
        // boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
        textAlign: "center",
        // border: "2px solid #2c2c2c",
        // padding: "1.5rem 1rem 2rem",
        position: "relative",
      }}
    >

      <div className="profile-wrapper">
  <div className="profile-img">
      <div
  style={{
    width: "100%",
    height: "240px",
    backgroundImage: "url('/lp.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "2.5rem",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.4s ease",
  }}
 onMouseEnter={(e) => {
  e.currentTarget.style.filter = "hue-rotate(-180deg) saturate(1.6)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.filter = "none";
}}

>
</div>
  </div>
</div>



      {/* <div style={{ marginTop: "1rem" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff", marginBottom: "0.4rem" }}>LOK PRASANTH</h3>
        <p style={{ fontSize: "0.95rem", color: "#8e8e8e" }}>ALAMANDA</p>
      </div> */}
    </div>

    {/* Button Outside the Card */}
    <button
  style={{
    marginTop: "1rem",
    padding: "0.7rem 1.6rem",
    background: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: ".5rem",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow:
      "0 4px 20px rgba(255,255,255,0.2) inset, 0 6px 20px rgba(0,0,0,0.3)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
  }}
  onMouseOver={(e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.25)";
    e.target.style.boxShadow =
      "0 4px 20px rgba(255,255,255,0.35) inset, 0 6px 25px rgba(0,0,0,0.4)";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.15)";
    e.target.style.boxShadow =
      "0 4px 20px rgba(255,255,255,0.2) inset, 0 6px 20px rgba(0,0,0,0.3)";
  }}
onClick={() => navigate("/about")}
>
  {/* Gloss Highlight */}
  <span
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "50%",
      background: "linear-gradient( to bottom, rgba(255,255,255,0.6), transparent)",
      borderRadius: "inherit",
      pointerEvents: "none",
      opacity: "0.7",
    }}
  ></span>

  Know More
</button>

  </div>

  {/* Right Content */}
  <div
    style={{
      width: "300px",
      color: "#eee",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      flex: "1 1 250px",
    }}
  >
    {/* Qualification */}
    <div style={{ display: "flex", alignItems: "center", padding: "1rem", gap: "1rem" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtgdWCA707yr610ic3xodtMoX598W--T9ZQ&s"
        alt="Raghu College Logo"
        style={{ width: "50px", height: "78px", objectFit: "contain", borderRadius: "0.5rem", padding: "4px" }}
      />
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
        flexWrap: "wrap",
      }}
    >
      <div style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#fff", lineHeight: 1 }}>1+ 
        <span  style={{ margin: 0, fontSize: "1.5rem", color: "#8e8e8e" }}> Years of work Experience </span></div>
    </div>

    {/* Skills Auto-Scroll */}
    <div style={{ padding: "1rem", overflow: "hidden", position: "relative" }}>
      <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#8e8e8e" }}>Tools I Master</h4>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          animation: "scrollSkills 10s linear infinite",
          scrollbarWidth: "none",
        }}
      >
        {[...Array(2)].flatMap(() =>
          [
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "HTML5", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
            { name: "CSS3", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
            { name: "Microsoft Excel", img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
          ].map((skill, index) => (
            <img
              key={`${skill.name}-${index}`}
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              style={{
                width: "36px",
                height: "36px",
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

  {/* Mobile Responsive Media Query */}
  <style>
{`
/* -------------------- FORCE SECTION BACKGROUND -------------------- */
section {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/* -------------------- TABLET -------------------- */
@media (max-width: 1024px) {
  section {
    flex-direction: column !important;
    align-items: center !important;
  }
}

/* -------------------- MOBILE -------------------- */
@media (max-width: 768px) {

  section {
    padding: 1.5rem 1rem !important;
    gap: 1.5rem !important;
    background-size: contain !important; /* KEEP LIGHT BIG */
  }

  h2 {
    font-size: 1.5rem !important;
    text-align: center !important;
  }

  section > div {
    max-width: 380px !important;
    width: 100% !important;
  }

  div[style*="340px"] {
    width: 320px !important;
  }

  div[style*="300px"] {
    width: 100% !important;
  }

  /* ---------------- PROFILE IMAGE ONLY ---------------- */
  div[style*="lp.png"] {
    height: 250px !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }

  button {
    width: auto !important;
    padding: 0.6rem 1.4rem !important;
    font-size: 0.9rem !important;
  }
}

/* -------------------- SMALL MOBILE -------------------- */
@media (max-width: 480px) {

  h2 {
    font-size: 1.35rem !important;
  }

  p,
  span {
    font-size: 0.8rem !important;
  }

  /* Smaller profile image */
  div[style*="lp.png"] {
    height: 250px !important;
    background-size: contain !important;
  }

  button {
    padding: 0.55rem 1.2rem !important;
    font-size: 0.85rem !important;
  }
}
`}
</style>


{/* old style */}
  {/* <style>
    {`
      @media (max-width: 1024px) {
        section {
          flex-direction: column;
          padding: 2rem 1rem;
        }
      }

      @media (max-width: 768px) {
        h2 {
          font-size: 1.7rem;
        }

        div[style*="width: 300px"] {
          width: 100% !important;
        }

        div[style*="width: 340px"] {
          width: 100% !important;
        }

        button {
          width: 100%;
          text-align: center;
        }
      }

      @media (max-width: 480px) {
        h2 {
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.2rem !important;
        }

        p, span {
          font-size: 0.85rem !important;
        }

        div[style*="height: 298px"] {
          height: 220px !important;
        }

        img[alt="Profile"] {
          width: 60px !important;
          height: 60px !important;
          bottom: -30px !important;
        }
      }
    `}
  </style> */}
</section>


      {/* Project Sections */}
 <section
 style={{
    padding: "7rem 5%",
    backgroundColor: "#000",
    // backgroundImage: "url('/light.png')",
    backgroundSize: "cover",        // REQUIRED for mobile
    backgroundPosition: "center",   // keeps center visible
    backgroundRepeat: "no-repeat",  // prevents flickering on mobile
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
    minHeight: "100vh",             // ensures background appears fully
  }}
>
  <h2
    style={{
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 600,
      color: "#e5e5e5",
      marginBottom: "4rem",
    }}
  >
    Projects
  </h2>

  <div style={{ position: "relative", overflow: "hidden", marginBottom: "3rem" }}>
    <div
      id="carousel-container"
      style={{
        display: "flex",
        gap: "2rem",
        transition: "transform 0.5s ease",
        alignItems: "flex-start",
      }}
    >
      {[
        { id: 1, image: "itnt.png", title: "iTNT HUB Website" },
        { id: 2, image: "speedexam.png", title: "Speed exam Website" },
        { id: 3, image: "vitti.png", title: "Vitti Living Website" },
        { id: 4, image: "Vilot.png", title: "Portfolio Site" },
      ].map((project) => (
       <div
  key={project.id}
  className="carousel-box"
  onMouseEnter={(e) => {
    const inner = e.currentTarget.querySelector(".inner-scale");
    const arrow = e.currentTarget.querySelector(".box-arrow");

    inner.style.transform = "scale(1.15)"; // Separate hover zoom
    arrow.style.transform = "translateX(6px)"; // move forward
    arrow.style.background = "rgba(0,0,0,0.8)"; // darker
  }}
  onMouseLeave={(e) => {
    const inner = e.currentTarget.querySelector(".inner-scale");
    const arrow = e.currentTarget.querySelector(".box-arrow");

    inner.style.transform = ""; // restore
    arrow.style.transform = "translateX(0px)";
    arrow.style.background = "rgba(0,0,0,0.55)"; // original
  }}
  style={{
    flex: "0 0 500px",
    height: "380px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    cursor: "pointer",
  }}
>

          {/* NEW inner wrapper for proper scaling */}
          <div
            className="inner-scale"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              border: "3px solid #2c2c2c",
              overflow: "hidden",
              transition: "transform 0.5s ease",
                  position: "relative", // needed for overlay

            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
              {/* OVERLAY BUTTON (FRONT OF IMAGE) */}
 
          </div>
 <a
  href="/projects"
  style={{
    position: "absolute",
    bottom: "14px",
    right: window.innerWidth > 768 ? "14px" : "auto", // right on desktop
    left: window.innerWidth <= 768 ? "14px" : "auto", // left on mobile
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "6px",
    fontSize: "0.85rem",
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    zIndex: 10,
    backdropFilter: "blur(3px)",
    transition: "0.25s ease",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.target.style.background = "rgba(0,0,0,0.75)")}
  onMouseLeave={(e) => (e.target.style.background = "rgba(0,0,0,0.55)")}
>
  ➜
</a>


        </div>
      ))}
    </div>
  </div>

  <div
    id="carousel-texts"
    style={{
      display: "flex",
      gap: "2rem",
      justifyContent: "flex-start",
      marginBottom: "4rem",
    }}
  >
    {[
      { title: "iTNT HUB Website", buttons: ["Html", "Css", "Bootstrap"] },
      { title: "Speed exam Website", buttons: ["Tailwind CSS", "Html", "Css"] },
      { title: "Vitti Living Website", buttons: ["JavaScript", "Bootstrap", "Html"] },
      { title: "Portfolio Website", buttons: ["React", "Tailwind", "Html"] },
    ].map((project, index) => (
      <div
        key={index}
        style={{
          flex: "0 0 500px",
          textAlign: "left",
          color: "#fff",
        }}
      >
        <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          {project.title}
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {project.buttons.map((btn, idx) => (
            <span
              key={idx}
              style={{
                fontSize: "0.95rem",
                color: "#fff",
                background: "#1b1b1b",
                padding: "0.45rem 0.75rem",
                borderRadius: "8px",
              }}
            >
              {btn}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* Controls */}
 <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4rem",
    gap: "1rem",
  }}
>
  {/* Previous Button */}
  <button
    id="prev"
    style={{
      padding: "0.8rem 1.6rem",
      color: "#fff",
      cursor: "pointer",
      borderRadius: "8px",
      backgroundColor: "#1b1b1b",
      border: "none",
      transform: "rotate(180deg)", // fixed rotation
      fontSize: "1.2rem",
    }}
  >
    ➜
  </button>

  {/* Progress Bar */}
  <div
    style={{
      flex: 1,
      height: "6px",
      background: "#555",
      position: "relative",
      borderRadius: "3px",
      overflow: "hidden",
    }}
  >
    <div
      id="indicator"
      style={{
        height: "100%",
        background: "#fff",
        width: "9.33%",
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: "3px",
        transition: "left 0.5s ease",
      }}
    ></div>
  </div>

  {/* Next Button */}
  <button
    id="next"
    style={{
      padding: "0.8rem 1.6rem",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      borderRadius: "8px",
      backgroundColor: "#1b1b1b",
      fontSize: "1.2rem",
    }}
  >
    ➜
  </button>
</div>


  {/* FIXED JS */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
      const carousel = document.getElementById('carousel-container');
      const boxes = Array.from(document.getElementsByClassName('carousel-box'));
      const indicator = document.getElementById('indicator');
      let currentIndex = 0;

      const updateCarousel = () => {
        carousel.style.transform = 'translateX(' + (-currentIndex * 530) + 'px)';
        indicator.style.left = (currentIndex * 100 / boxes.length) + '%';

        boxes.forEach((box, index) => {
          const inner = box.querySelector('.inner-scale');
          inner.style.transform = index === currentIndex ? 'scale(1.28)' : 'scale(1)';
        });
      };

      document.getElementById('prev').onclick = () => {
        currentIndex = currentIndex === 0 ? boxes.length - 1 : currentIndex - 1;
        updateCarousel();
      };

      document.getElementById('next').onclick = () => {
        currentIndex = currentIndex === boxes.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
      };

      updateCarousel();
    `,
    }}
  />
</section>



{/* Certificates Section */}
<section
  style={{
    position: "relative",
    padding: "4rem 5%",
    backgroundImage: "url('/rock.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
  }}
>

  {/* Top-left Text */}
  <div
    style={{
      position: "absolute",
      top: "1.5rem",
      left: "1.5rem",
      zIndex: 2,
      maxWidth: "80%",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(1.3rem, 4vw, 2rem)",
        fontWeight: "bold",
        lineHeight: "1.2",
      }}
    >
      Achievements & Certificates
    </h2>

    <p
      style={{
        fontSize: "clamp(0.8rem, 3vw, 1rem)",
        color: "#eee",
      }}
    >
      Some of my proudest achievements and certifications that showcase my
      skills and dedication.
    </p>
  </div>

  {/* Carousel */}
  <div
    id="cert-carousel"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      paddingTop: "4rem",
      zIndex: 2,
    }}
  >
   <img
  id="cert-img"
  alt="Certificate"
  style={{
    width:
      window.innerWidth < 600
        ? "120px"        // small on mobile
        : "250px",       // normal on desktop

    height: "auto",
    margin: "0 auto",
    marginTop: window.innerWidth < 600 ? "-6.5rem" : "-8rem", // ⬅ MOVE IMAGE UP
    display: "block",
    filter: "drop-shadow(0px 18px 10px rgba(0,0,0,0.45))",
    transition: "opacity 0.5s ease",
  }}
/>

  </div>

  {/* Buttons remain same */}
  <div
    style={{
      position: "absolute",
      bottom: "1.2rem",
      right: "1.2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 3,
      gap: "0.4rem",
    }}
  >
    <img
      id="cert-thumb"
      src="thumb.png"
      alt="Upcoming"
      style={{
        width: "70px",
        height: "65px",
        objectFit: "cover",
        borderRadius: "6rem",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
      }}
    />

    <p
      id="cert-title"
      style={{
        color: "#cbd5e1",
        fontSize: "clamp(0.7rem, 2.5vw, 0.9rem)",
        textAlign: "center",
      }}
    >
      Certificate Title
    </p>

    <div style={{ display: "flex", gap: "0.6rem" }}>
      <button
        id="prev-cert"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "none",
          color: "#fff",
          fontSize: "1.3rem",
          cursor: "pointer",
          rotate: "180deg",
        }}
      >
        ➜
      </button>

      <button
        id="next-cert"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "none",
          color: "#fff",
          fontSize: "1.3rem",
          cursor: "pointer",
        }}
      >
        ➜
      </button>
    </div>
  </div>

</section>




  {/* Featured Section */}
<section
  style={{
    position: "relative",
    width: "95%",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
  }}
>
  <style>
    {`
      /* SLIDER ANIMATIONS */
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
        padding: 0 1rem;
      }
      .slider-image {
        width: clamp(180px, 40vw, 300px);
        height: clamp(120px, 28vh, 200px);
        object-fit: cover;
        border-radius: 10px;
        flex-shrink: 0;
      }

      /* GRADIENT OVERLAYS */
      .blur-overlay {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        z-index: 3;
        pointer-events: none;
      }
      .blur-left {
        left: 0;
        background: linear-gradient(to right, #000, transparent);
      }
      .blur-right {
        right: 0;
        background: linear-gradient(to left, #000, transparent);
      }

      /* HEADER APPEAR & SWITCH */
      @keyframes showText {
        0%, 35% { opacity: 1; transform: scale(1); }
        45%, 100% { opacity: 0; transform: scale(0.85); }
      }
      @keyframes showIcon {
        0%, 45% { opacity: 0; transform: scale(0.6); }
        55%, 90% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.6); }
      }
    `}
  </style>

  {/* Section Header */}
  <div
    style={{
      height: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      margin: "2.5rem",
    }}
  >
    {/* TEXT */}
    <span
      style={{
        fontSize: "clamp(2rem, 4vw, 2.75rem)",
        fontWeight: 600,
        color: "#e5e5e5",
        animation: "showText 6s linear infinite",
        position: "absolute",
      }}
    >
      Featured
    </span>

    {/* ICON */}
  <div
  style={{
    position: "absolute",
    animation: "showIcon 6s linear infinite",
  }}
>
  <div
    style={{
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "3px solid #00cfff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <svg width="56" height="55" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="70%" stopColor="#2e6bff" />
          <stop offset="100%" stopColor="#001541" />
        </linearGradient>
      </defs>

      <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" fill="url(#blueGrad)" />
    </svg>
  </div>
</div>


  </div>

  {/* Left and Right Blur Corners */}
  <div className="blur-overlay blur-left" />
  <div className="blur-overlay blur-right" />

  {/* TOP SLIDER */}
  <div
    style={{
      overflow: "hidden",
      marginBottom: "1rem",
      height: "30vh",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div
      className="slider-row"
      style={{
        animation: "slideRight 35s linear infinite",
      }}
    >
      {[...Array(2)].flatMap(() =>
        ["/card2.png", "/card4.png", "/card1.png", "/card7.png", "/card3.png","/vitti.png"].map(
          (src, i) => (
            <img key={`top-${src}-${i}`} src={src} className="slider-image" />
          )
        )
      )}
    </div>
  </div>

  {/* BOTTOM SLIDER */}
  <div
    style={{
      overflow: "hidden",
      height: "30vh",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div
      className="slider-row"
      style={{
        animation: "slideLeft 22s linear infinite",
      }}
    >
      {[...Array(2)].flatMap(() =>
        ["/speedexam.png", "/card8.png", "/card6.png","/bi.png", "/vitti.png", "/card9.png"].map(
          (src, i) => (
            <img key={`bottom-${src}-${i}`} src={src} className="slider-image" />
          )
        )
      )}
    </div>
  </div>
</section>



{/* Contact Section */}
<section
  style={{
    padding: "4rem 5%",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
      fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
      color: "#cbd5e1",
      maxWidth: "700px",
      margin: "0 auto 2rem",
      lineHeight: "1.7",
      padding: "0 1rem",
    }}
  >
    Whether you're building a new product or redesigning an old one,
    I'm excited to bring your vision to life. Let's build something
    exceptional together.
  </p>

  {/* Centered Image with Glow */}
  <div
    style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      margin: "2rem 0",
    }}
  >
    {/* Glow behind image */}
    <div
      style={{
        position: "absolute",
        width: "clamp(250px, 60vw, 500px)",
        height: "clamp(280px, 65vw, 560px)",
        background:
          "radial-gradient(circle, rgba(0, 102, 255, 0.6) 30%, rgba(0, 102, 255, 0) 70%)",
        filter: "blur(60px)",
        zIndex: 1,
      }}
    />

    {/* Image */}
    <img
      src="a.png"
      alt="Collaboration Illustration"
      style={{
        width: "clamp(160px, 40vw, 280px)", // fully responsive
        maxWidth: "100%",
        borderRadius: "50%",
        display: "block",
        position: "relative",
        zIndex: 2,
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    />
  </div>

  <a
    href="mailto:your.email@example.com"
    style={{
      padding: "0.85rem 2rem",
    background: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "1.5rem",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow:
      "0 4px 20px rgba(255,255,255,0.2) inset, 0 6px 20px rgba(0,0,0,0.3)",
      fontWeight: 600,
      textDecoration: "none",
      fontSize: "clamp(0.9rem, 3vw, 1rem)",
      transition: "background 0.3s ease",
      zIndex: 10,
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#000")}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#red")}
  >
    Say Hello 👋🏻
  </a>
</section>






    </main>
  );
}
