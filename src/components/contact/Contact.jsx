import React, { useState } from "react";
import "./contact.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("https://formspree.io/f/myzjddzw", formData);
      toast.success("You have successfully sent the message!", { autoClose: 2000 });
      setFormData({ name: '', email: '', message: ''});
      toast.info("Thank you for Sending me a message...");

    } catch (error) {
      setError('Please try again');
      toast.error("Error sending message. Please try again.");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>If you have a project or just want to say hi, feel free to reach out!</p>

      <form 
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
