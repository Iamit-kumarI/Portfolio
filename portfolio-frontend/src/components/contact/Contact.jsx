import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me ☎️</h2>
      <p className="contact-subtitle">
        Got a project in mind? Let’s connect 📲
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="what should I call you?"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <textarea
          name="message"
          placeholder="Start typing…"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        ></textarea>

        <button type="submit" className="contact-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="success-text">✔️ I got you message 📩</p>
        )}

        {status === "error" && (
          <p className="error-text">
            ❌ Something went wrong. Try again. OR you can directly send you
            message us at amitkumaramitkuamr15351@gmail.com
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
