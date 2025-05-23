import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="bijaysaha594@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+91 7797598737" Image={CiLocationOn} />
      <SingleInfo text="West Bengal, Kolkata" Image={CiPhone} />
    </div>
  );
};

export default ContactInfo;
