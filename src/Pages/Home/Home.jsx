import React from "react";
import { Delivery } from "../../Components/Delivery/Delivery";
import { DiningOut } from "../../Components/DiningOut/DiningOut";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { NightLife } from "../../Components/NightLife/NightLife";
import { TabOptions } from "../../Components/TabOptions/TabOptions";

export const Home = () => {
  const [activeTab, setActiveTab] = React.useState("Delivery");
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Nightlife":
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
