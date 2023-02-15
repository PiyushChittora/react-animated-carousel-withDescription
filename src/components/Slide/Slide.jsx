import React from "react";
import Description from "./Description";
import "./Slide.css";

export default function Slide(props) {
  const obj = props.obj;
  const idx = props.idx;

  const color="color" in obj ? obj.color:"#ff4d5a";

  return (
    <div className="HomeContainer">
      <Description obj={obj} />
      <div className="rightContainer">
        <div className="box blue"></div>
        <div
          className="box red"
          style={{ backgroundColor: color }}
        ></div>
        <img src={obj.image} alt="loading" />
      </div>
      {/* <div className="idxContainer">
        <div
          className="idxText"
          style={{ color: color }}
        >
          0{idx+1}
        </div>
      </div> */}
    </div>
  );
}
