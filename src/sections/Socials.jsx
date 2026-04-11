function Socials() {
  const links = [
    { name: "GitHub", url: "https://github.com/P-lahari93" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/Laharisri/" },
    { name: "LeetCode", url: "https://leetcode.com/u/LahariTanu/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/peesalaharisri" },
    { name: "Striver Sheet", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
  ];

  return (
    <section>
      <h2>Profiles</h2>

      <div style={styles.grid}>
        {links.map((l, i) => (
          <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="card">
            {l.name}
          </a>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
  },
};

export default Socials;