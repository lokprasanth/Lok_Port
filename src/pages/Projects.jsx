const detailedProjects = [
  {
    id: 1,
    image: "itnt.png",
    logo: "/it.png",
    title: "iTNT HUB Website with an innovative user interface",
    buttons: ["Html", "Css", "Bootstrap", "JavaScript", "UI Testing", "Frontend Developement"],
  },
  {
    id: 2,
    image: "vitti-living.png",
    logo: "/vilogo.png",
    title: "Vitti Living Website with innovative user interface",
    buttons: ["Tailwind CSS", "Html", "Css", "JavaScript", "Frontend Developement"],
  },
  {
    id: 3,
    image: "speedexam.png",
    logo: "/speed.png",
    title: "Portfolio Site",
    buttons: ["JavaScript", "Bootstrap", "Html", "Tailwindcss", "Frontend Developement"],
  },
  {
    id: 4,
    image: "card8.png",
    logo: "/healthlogo.png",
    title: "Google Studio Dashboard Clone",
    buttons: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://healthcare-dashboard.example.com",
  },
  {
    id: 5,
    image: "card4.png",
    logo: "/travelogo.png",
    title: "Food website Platform with Stunning UI",
    buttons: ["Tailwind CSS", "Django", "Frontend Development"],
    link: "https://travelplatform.example.com",
  },
  {
    id: 6,
    image: "card2.png",
    logo: "/ecomlogo.png",
    title: "Google Studio website for professional showcase",
    buttons: ["React", "Redux", "Styled Components", "Tailwindcss", "UI/UX"],
    link: "https://ecommerce-app.example.com",
  },
  {
    id: 7,
    image: "card6.png",
    logo: "/ecomlogo.png",
    title: "Ecommerce website for professional",
    buttons: ["React", "Redux", "Styled Components", "Tailwindcss", "UI/UX"],
    link: "https://ecommerce-app.example.com",
  },
];

function Projects() {
  return (
    <section
      style={{
        padding: "4rem 5%",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* 🚧 Billboard notice */}
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "#00ff00",
          padding: "0.75rem 1rem",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
          borderRadius: "8px",
          marginBottom: "2rem",
          boxShadow: "0 0 10px rgba(255, 165, 0, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          animation: "pulseGlow 2s infinite",
        }}
      >
        <span role="img" aria-label="work">🚧</span>
        <span>This Projects Page is Under Active Development</span>
        <span role="img" aria-label="gear">🛠️</span>
      </div>

      <h2
        style={{
          fontSize: "clamp(1.95rem, 5vw, 1.5rem)",
          fontWeight: 600,
          color: "#e5e5e5",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
          flexWrap: "wrap",
          lineHeight: 1.9,
        }}
      >
        <span>Projects I've Built & Contributed To – All Live</span>
        <svg width="24" height="26" viewBox="0 0 24 24" fill="#ffffff" style={{ marginTop: "2px" }}>
          <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
        </svg>
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "90%",
        }}
      >
        {detailedProjects.map((project) => (
          <div
            key={project.id}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={project.logo}
                  alt="Logo"
                  style={{
                    width: "auto",
                    height: "48px",
                    maxWidth: "100px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#1a1a1a",
                    padding: "4px",
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.9rem",
                    margin: 0,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <span style={{ color: "#6c6c6c" }}>
                    {project.title.slice(0, Math.floor(project.title.length / 2))}
                  </span>
                  <span style={{ color: "#fff" }}>
                    {project.title.slice(Math.floor(project.title.length / 2))}
                  </span>
                </h3>
              </div>

              {/* Buttons */}
              <div
                className="button-row project-buttons"
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "auto",
                  flexWrap: "wrap",
                }}
              >
                {project.buttons.map((btn, i) => (
                  <button
                    key={i}
                    style={{
                      padding: "0.6rem 1.5rem",
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

            {/* Right Column - Image with overlay badge */}
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
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    position: "relative",
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
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <span
                    className="live-label"
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                  >
                    View Live →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive & Hover Styles */}
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 10px rgba(255, 165, 0, 0.2);
            }
            50% {
              box-shadow: 0 0 20px rgba(255, 165, 0, 0.4);
            }
            100% {
              box-shadow: 0 0 10px rgba(255, 165, 0, 0.2);
            }
          }  /* bill board */


          a:hover .live-label {
            opacity: 1 !important;
          }

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
    </section>
  );
}

export default Projects;
