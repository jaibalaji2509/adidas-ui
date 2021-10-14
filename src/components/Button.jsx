import React from "react";
import { BsArrowRight } from "react-icons/bs";
export default function Button(props) {
  return (
    <>
      <div
        style={{
          padding: "10px",
          border: `1px solid ${props.bg}`,
          width: "fit-content",
        }}
      >
        {props.value}
        <BsArrowRight style={{ width: "40px" }} />
      </div>
      <div
        className="top-btn"
        style={{
          position: "relative",
          padding: "10px",
          border: `1px solid ${props.bg}`,
          marginTop: "-55px",
          marginLeft: "-9px",
          width: "fit-content",
          backgroundColor: `${props.bg}`,
        }}
      >
        <div
          style={{
            paddingLeft: "5px",
            paddingTop: "5px",
            color: `${props.color}`,
          }}
        >
          {props.value} <BsArrowRight style={{ width: "40px" }} />
        </div>
      </div>
    </>
  );
}
