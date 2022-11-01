import React from "react";
import "./Header.css";
import { GoLocation } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
export const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header_logo"
      />
      <div className="header_right">
        <div className="header_location_search_container">
          <div className="location_wrapper">
            <div className="loaction_icon_name">
              <GoLocation className="absolute-center loaction_icon" />
              <div>Delhi</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>
          <div className="loaction-seperater"></div>
          <div className="header-search-bar">
            <BsSearch className="absolute-center search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant, cusine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
            alt="profile"
            className="header-profile-img"
          />
          <span className="header-username">Piryanshu</span>
          <RiArrowDropDownLine className="absolute-center profile-option-icon" />
        </div>
      </div>
    </div>
  );
};
