import React from "react";
import "./ImageWYS.css";
export default function ImageWYS(props) {
  return (
    <>
      <img
        style={{ width: "507px", height: "377px", margin: "10px" }}
        src={props.source}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "-200px",
          fontSize: "18px",
          color: "#ffffff",
          fontFamily: " AdineuePRO, Helvetica, Arial, sans-serif",
          fontWeight: 700,
        }}
      >
        {props.value}
      </div>
    </>
  );
}
