import React from "react";

export default function Element({ data }) {
  return (
    <>
      <a href={data.link} target="_blank" rel="noreferrer noopener">
        <div className="element">
          <p>{data.title}</p>
          <data.icon className="icons" />
        </div>
      </a>
    </>
  );
}
