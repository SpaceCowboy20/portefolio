import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <div className="textbox" tabIndex="0">
        <div className="borderpp">
          <div className="cadre-pp">
            <img src={require("../../imgs/pp2.jpg")} alt="" className="pp" />
          </div>
        </div>
        <h1>Housseine FELLAHI</h1>
        <h4>à propos de moi</h4>
      </div>
    </div>
  );
}
