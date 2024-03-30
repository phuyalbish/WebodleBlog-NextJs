"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./contactus.module.css";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [contactData, setContactData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const changeInputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", contactData);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className={styles.contact_form}>
          <input
            type="text"
            name="name"
            value={contactData.name}
            placeholder="Your Name"
            onChange={changeInputHandler}
            className={styles.input}
            autoFocus
            required
          />
          <input
            type="email"
            name="email"
            value={contactData.email}
            placeholder="Your Email"
            onChange={changeInputHandler}
            className={styles.input}
            required
          />
          <textarea
            name="message"
            value={contactData.message}
            placeholder="Your Message"
            onChange={changeInputHandler}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.primary}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
