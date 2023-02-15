import React from "react";

import "./Description.css";

export default function Description(props) {
  const obj = props.obj;

  const color="color" in obj ? obj.color:"#ff4d5a";
  const Text = "textOnly" in obj? obj.textOnly:false;
  return (
    <>
      <div className="leftContainer">
        <div className="headingName">
          {obj.heading}
          <div
            className="headingDecor"
            id="decor1"
            style={{ backgroundColor: color }}
          ></div>
          <div
            className="headingDecor"
            id="decor2"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="Descp">{obj.description}</div>
        {Text ? (
          <div
            className="port"
            style={{ color: color }}
          >
            {obj.text}
          </div>
        ) : (
          <a
            href={obj.link}
            className="btn"
            style={{ backgroundColor: color }}
            target="__blank"
          >
            {obj.text}
          </a>
        )}
      </div>
    </>
  );
}
