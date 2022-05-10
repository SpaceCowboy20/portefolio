import React from "react";

export default function Element({ data }) {
  return (
    <>
      <div className="element">
        <p>{data.title}</p>
        <data.icon className="icons" />
      </div>
    </>
  );
}
