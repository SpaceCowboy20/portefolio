import React from "react";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";

export default function Contact() {
  return (
    <div className="contact">
      <div className="icon">
        <FiIcons.FiPhone className="contactIcons phone" />
      </div>
      <div className="icon">
        <SiIcons.SiDiscord className="contactIcons discord" />
      </div>
      <div className="icon">
        <FiIcons.FiMail className="contactIcons mail" />
      </div>
    </div>
  );
}
