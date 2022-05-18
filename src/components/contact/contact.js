import React from "react";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";

export default function Contact({ notifRef }) {
  return (
    <div className="contact">
      <div
        className="icon"
        onClick={() => {
          navigator.clipboard.writeText("+213-555-13-48-89");
          notifRef.current.show();
        }}
      >
        <FiIcons.FiPhone className="contactIcons phone" />
      </div>
      <div
        className="icon"
        onClick={() => {
          navigator.clipboard.writeText("houloulou#7271");
          notifRef.current.show();
        }}
      >
        <SiIcons.SiDiscord className="contactIcons discord" />
      </div>
      <div className="icon">
        <a href="mailto:housseine18@gmail.com">
          <FiIcons.FiMail className="contactIcons mail" />
        </a>
      </div>
    </div>
  );
}
