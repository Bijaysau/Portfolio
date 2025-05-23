import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import SingleContactSocail from "./SingleContactSocail";

const ContactSocail = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocail
        link="https://www.linkedin.com/in/bijay-sau-026b97233/"
        Icon={CiLinkedin}
      />
      <SingleContactSocail link="https://github.com/Bijaysau" Icon={FaGithub} />
      <SingleContactSocail link="https://x.com/BijaySau" Icon={BsTwitterX} />
    </div>
  );
};

export default ContactSocail;
