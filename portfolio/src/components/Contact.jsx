import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Thanks, ${
        form.name || "there"
      }! In a real app this would send your message.`
    );
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Have a project in mind, need guidance, or want a code review? Send
            me a message.
          </p>

          <ul className="list">
            <li>Email: vikas.kumar2@geeksforgeeks.org</li>
            <li>GitHub: https://github.com/vikasthakurr?tab=repositories</li>
            <li>LinkedIn: https://www.linkedin.com/in/vikasthakurr/</li>
          </ul>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can I help?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn primary full-width" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
