import React from "react";
import Button from "./Button";
import "./Banner.css";
import YEEZY from "../image/YEEZY.jpg";
export default function Banner() {
  return (
    <div className="container-fluid banner" style={{ padding: 0, margin: 0 }}>
      <img
        style={{ padding: 0, margin: 0 }}
        className="container-fluid"
        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/YEEZY_500_HIGH_MIST_STONE_HP_D_tcm209-783851.jpg"
        alt=""
      />
      <div className="dfr cont-banner " style={{ padding: "280px 20px" }}>
        <div className="fc">
          <div className="title">
            YEEZY 500 HIGH MIST <br />
            STONE
          </div>
          <div className="subtitle">October 11 2021</div>
          <div style={{ marginTop: "15px" }}>
            <Button bg="#000000" color="#ffffff" value="SHOP NOW" />
          </div>
        </div>
      </div>
    </div>
  );
}
