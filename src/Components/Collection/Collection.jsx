import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import { NextArrow } from "../Carousel/nextArrow";
import { PreviousArrow } from "../Carousel/PreviousArrow";
import "./Collection.css";

var settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  PreviousArrow: <PreviousArrow />,
};
export const Collection = ({ collectionList }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Delhi</div>
            <AiFillCaretRight className="absolute-center" />
          </div>
        </div>
        <Slider {...settings}>
          {collectionList.map((item) => {
            return (
              <div>
                <div className="collection-cover">
                  <img src={item.cover} alt="" className="collection-image" />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <AiFillCaretRight className="absolute-center" /> 
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
