import React from "react";
import { Filter } from "../Filter/Filter";
import "./Delivery.css";
import { CiTimer } from "react-icons/ci";
import { BsFilterSquare } from "react-icons/bs";
import { DeliveryCollection } from "./DeliveryCollection/DeliveryCollection";
import { TopBrand } from "./TopBrands/TopBrand";
import { ExploreSection } from "./ExploreSection/ExploreSection";
import { restaurants } from "../../Data/Restaurant";
const deliveryfilters = [
  {
    id: 1,
    icon: <BsFilterSquare />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <CiTimer />,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantList=restaurants
export const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryfilters} />
      </div>
      <DeliveryCollection/>
      <TopBrand/>
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Delhi"/>
    </div>
  );
};
