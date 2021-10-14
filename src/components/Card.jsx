import React from "react";
import "./Card.css";
import { AiOutlineHeart } from "react-icons/ai";
export default function Card() {
  return (
    <div className="dfc car-w">
      <div>
        <img
          className="img-card"
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto/60712c4ffd24452fbe87acee00dbf61a_9366/adidas_Ultraboost_DNA_x_LEGO(r)_Colors_Shoes_White_H67955_01_standard.jpg"
          alt=""
        />
        <AiOutlineHeart className="fav-card" />
        <div style={{ marginLeft: "10px" }} className="pric-card">
          $200
        </div>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div className="prod-name">YEEEZH 500 High</div>
        <div>Originals</div>
      </div>
    </div>
  );
}
