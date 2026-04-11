function Skills() {
  const skills = [
    "Python","Java","C","JavaScript",
    "React","FastAPI","Flask",
    "Machine Learning","Deep Learning","NLP",
    "MongoDB","SQL","Git"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={styles.grid}>
        {skills.map((s,i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}


const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: "15px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  card: {
    padding: "10px 15px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
  },
};

export default Skills;