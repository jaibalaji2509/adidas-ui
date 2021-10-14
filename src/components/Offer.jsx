import React from "react";
import Button from "./Button";

export default function Offer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#ede633",
        padding: "50px",
        marginBottom: "60px",
      }}
    >
      <div
        className="dfr"
        style={{ justifyContent: "center", marginLeft: "-290px" }}
      >
        <div className="wh-title" style={{ margin: "-10px" }}>
          {" "}
          JOIN ADIDAS AND GET 15% OFF &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <Button value="SIGN UP" color="#ffffff" bg="#000000" />
        </div>
      </div>
    </div>
  );
}
