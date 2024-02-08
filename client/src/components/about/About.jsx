// About.jsx
import React, { useState } from "react";
import styles from "./About.module.css";

export default function About(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, utilizando Axios o Fetch
    console.log("Formulario enviado:", formData);
    // Limpia el formulario después de enviarlo
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>
        Hello! I'm Ezequiel Elcontar, a developer passionate about technology and software development.
        You can find more about me on my{" "}
        <a href="https://github.com/ezequielelcontar/" target="_blank">
          GitHub
        </a>{" "}
      </p>
      
      <h2>Contact Me</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
