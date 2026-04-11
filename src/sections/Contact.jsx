import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (frontend only for now)");
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div style={styles.container}>
        
        {/* LEFT SIDE → FORM */}
        <form onSubmit={handleSubmit} className="card" style={styles.form}>
          <h3>Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit">Send</button>
        </form>

        {/* RIGHT SIDE → YOUR INFO */}
        <div className="card" style={styles.info}>
          <h3>Contact Info</h3>
          <p><strong>Name:</strong> Peesa Lahari Sri</p>
          <p><strong>Email:</strong> peesalaharisri@gmail.com</p>
          <p><strong>Location:</strong> Andhra Pradesh, India</p>
        </div>

      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    height: "120px",
  },

  info: {},
};

export default Contact;