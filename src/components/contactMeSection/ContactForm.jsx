import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSuccess = (e) => {
    setSuccess(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5d4cibt", "template_1uecw6h", form.current, {
        publicKey: "_OMKv1liwOI8silCS",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent ✔");
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const form = useRef();

  return (
    <div>
      <p className="text-green">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Your Message"
          className="rounded-lg bg-lightBrown px-2"
          required
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button className="bg-orange text-white p-2 rounded-lg h-12 font-bold text-xl hover:bg-darkOrange transition-all duration-500 ">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
