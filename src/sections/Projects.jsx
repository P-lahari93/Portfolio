function Projects() {
  const projects = [
    {
      title: "Brain Tumor Detection",
      tech: "U-Net, Deep Learning",
      github:
        "https://colab.research.google.com/drive/1vCd0gavtomCxbyhOJng2SyFpofO5EYwT",
    },
    {
      title: "AI Resume Analyzer",
      tech: "LLM, FastAPI",
      live:
        "https://illustrious-smart-hire-flow.base44.app/Dashboard",
    },
    {
      title: "AI Chat App",
      tech: "LLM APIs",
      live: "https://ai-chatbox-lali.onrender.com/",
      github: "https://github.com/P-lahari93/ai-chatbox-lali",
    },
    {
      title: "Energy Prediction",
      tech: "ML, Flask",
      live:
        "https://energy-consumption-prediction-2-3.onrender.com/",
      github:
        "https://github.com/P-lahari93/Energy-Consumption-Prediction-2",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px) scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
          >
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.tech}>{p.tech}</p>

            <div style={styles.links}>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.btn}
                >
                  Live
                </a>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.btnOutline}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 10%",
  },

  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
    padding: "20px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
  },

  title: {
    fontSize: "1.2rem",
  },

  tech: {
    color: "#94a3b8",
    marginTop: "5px",
  },

  links: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },

  btn: {
    padding: "6px 12px",
    background: "#7c3aed",
    borderRadius: "6px",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  },

  btnOutline: {
    padding: "6px 12px",
    border: "1px solid #7c3aed",
    borderRadius: "6px",
    color: "#7c3aed",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Projects;