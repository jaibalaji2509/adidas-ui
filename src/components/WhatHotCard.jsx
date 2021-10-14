import React from "react";
import "./WhatHotCard.css";
export default function WhatHotCard() {
  return (
    <div className="dfc" style={{ width: "322px", marginLeft: "10px" }}>
      <div>
        <img
          style={{ width: "322px" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw21-pw-sichona-burgundy-onsite-teaser-carousel_tcm209-762154.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          fontSize: "16px",
          fontFamily: "'AdihausDIN', Helvetica, Arial, sans-serif",
          lineHeight: "22px",
          fontWeight: 700,
          color: "#000000",
          padding: "10px",
        }}
      >
        Title
      </div>
      <div
        style={{
          fontSize: "16px",
          fontFamily: "'AdihausDIN', Helvetica, Arial, sans-serif",
          lineHeight: "22px",
          color: "#000000",
          textAlign: "left",
          marginTop: "-10px",
          paddingLeft: "10px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum placeat
        reprehenderit
      </div>
      <div style={{ paddingLeft: "10px" }} className="nw">
        <a href="#" className="whc-link">
          Shop Now
        </a>
      </div>
    </div>
  );
}
