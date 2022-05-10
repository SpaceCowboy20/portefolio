import React from "react";
import Element from "./element";
import { data } from "../../data/data";

export default function ElementContainer() {
  return (
    <div className="container">
      {data.map((element, index) => (
        <Element key={index} data={element} />
      ))}
    </div>
  );
}
