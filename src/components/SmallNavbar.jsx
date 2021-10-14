import React from "react";
import "./SmallNavbar.css";
import { BsCreditCard2Front } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
export default function SmallNavbar() {
  return (
    <div className="container-fluid bc-black">
      <div className="dfr  c-white sb-fonts">
        <div className="mr-9">
          <BsCreditCard2Front className="icn1" />
          <a href="#" className="link">
            ADDITIONAL 10% CASHBACK ON HDFC CARD
          </a>
        </div>
        <div className="mr-9">
          <FiTruck className="icn1" />
          <a href="#" className="link">
            FREE DELIVERY FOR ALL ORDERS NOW
          </a>
        </div>
        <div className="mr-9">
          <ImLoop className="icn1" />
          <a href="#" className="link">
            FREE RETURNS
          </a>
        </div>
      </div>
    </div>
  );
}
