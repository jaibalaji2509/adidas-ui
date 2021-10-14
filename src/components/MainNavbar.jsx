import React from "react";
import "./MainNavbar.css";
// import SearchIcon from "@mui/icons-material/Search";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import {BiShoppingBag} from 'react-icons/bi'
export default function MainNavbar() {
  return (
    <div className="container-fluid bc-white bor-c-nav">
      <div className="dfr">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="ml-40">
          <a href="#" className="navbar-db-l">
            MEN
          </a>
          <a href="#" className="navbar-db-l">
            WOMEN
          </a>
          <a href="#" className="navbar-db-l">
            KIDS
          </a>
          <a href="#" className="navbar-lb-l">
            SPORTS
          </a>
          <a href="#" className="navbar-lb-l">
            BRANDS
          </a>
          <a href="#" className="navbar-lb-l">
            COLLECTIONS
          </a>
          <a href="#" className="navbar-lb-l">
            OUTLET
          </a>
        </div>
        <div>
          <div className="fc th-col-nav">
            <div>
              <a className="sp-snav">help</a>
              <a className="sp-snav">returns</a>
              <a className="sp-snav">order tracker</a>
              <a className="sp-snav">sign up</a>
              <a className="sp-snav">Login</a>
            </div>
            {/* 2 */}
            <div>
              <div>
                <div className="margin-5px">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search"
                    className="search"
                  />
                  <GoSearch className="search-icon" />
                  <AiOutlineHeart className="sp-icon" />
                  <BiShoppingBag className="sp-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
