import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white font-special">
          Feel free to reach out to me for any inquiries, collaborations, or
          just a friendly chat.
          <br />
          I'm always open to new opportunities and connections.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
