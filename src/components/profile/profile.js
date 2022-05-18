import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <div className="textbox">
        <h1>Housseine FELLAHI</h1>
        <h4>à propos de moi</h4>
      </div>
      <div className="borderpp">
        <div className="cadre-pp">
          <img src={require("../../imgs/pp.jpg")} alt="" className="pp" />
        </div>
      </div>
    </div>
  );
}
