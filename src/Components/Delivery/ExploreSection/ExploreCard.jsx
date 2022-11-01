import React from "react";
import "./ExploreCard.css";
import { HiOutlineStar } from "react-icons/hi";
export const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const cover = restaurant?.info?.image?.url;
  console.log(cover);
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? "";
  const cuisine = restaurant?.info.cuisine?.map((item) =>
    item.name
  ).slice(0, 3)
  const bottomContainer = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length == 1
      ? offers[0].text
      : null;
  return (
    <div className="explore-card cursor">
      <div className="explore-card-cover">
        <img src={cover} alt="" className="explore-card-img" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}{" "}
            <HiOutlineStar
              className="absolute-center"
              style={{ marginLeft: "2px", fontSize: "13px" }}
            />
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisine.length && (
          <div className="res-cusine">
            {cuisine.map((item, i) => {
              return (
                <span className="res-cusine">
                  {item} {i != cuisine.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      {bottomContainer.length > 0 && (
        <div>
          <div className="card-seperater"></div>
            <div className="explore-bottom">
              <img
                src={bottomContainer[0]?.image?.url}
                alt=""
                style={{ height: "18px" }}
              />
              <div className="res-bottom-text">{bottomContainer[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};
