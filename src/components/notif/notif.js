import React, { useState, forwardRef, useImperativeHandle } from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

const Notif = forwardRef((props, ref) => {
  const [notif, setNotif] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      setNotif(true);
      setTimeout(() => {
        setNotif(false);
      }, 2000);
    },
  }));

  return (
    <div className="notif" id={notif ? "notif-on" : "notif-off"}>
      <BsIcons.BsCheck2Circle className="notif-icon" />
      Copied to clipboard
      <AiIcons.AiFillCloseCircle
        className="close"
        onClick={() => {
          setNotif(false);
        }}
      />
    </div>
  );
});

export default Notif;
