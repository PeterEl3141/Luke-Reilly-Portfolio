import "./ContactForm.css";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeparlp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      succeeded: false,
      error: "",
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          succeeded: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => null);

        setStatus({
          submitting: false,
          succeeded: false,
          error:
            data?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        submitting: false,
        succeeded: false,
        error: "Network error. Please try again.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What’s this about?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows="8"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="contact-form-submit"
        disabled={status.submitting}
      >
        {status.submitting ? "Sending..." : "Send"}
      </button>

      {status.succeeded && (
        <p className="contact-form-success">
          Thanks — your message has been sent.
        </p>
      )}

      {status.error && (
        <p className="contact-form-error">
          {status.error}
        </p>
      )}
    </form>
  );
};

export default ContactForm;