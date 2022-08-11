import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";
import OfferStyled from "./offer.styled";
import LightHouse from "../../assets/lighthouse.png";

const Offer = () => {
  return (
    <OfferStyled id="offer">
      <div className="offer-image">
        <img src={LightHouse} alt="lighthouse" />
      </div>
      <div className="offer-content">
        <div className="offer-content-title">
          <h1>We are Offering in Total 793 Tours Across the World</h1>
        </div>
        <div className="offer-content-list">
          {sources.map(({ title, icon, color }, key) => (
            <li key={key}>
              <div className={`icon ${color}`}>{icon}</div>
              <div className="text">
                <h3>{title}</h3>
              </div>
            </li>
          ))}
        </div>
      </div>
    </OfferStyled>
  );
};

const sources = [
  {
    title: "Best Travel Guide Always for your Services",
    icon: <BsPerson />,
    color: "red",
  },
  {
    title: "World Class Services Provided For You",
    icon: <BiWorld />,
    color: "green",
  },
  {
    title: "24/7 Strong Customer Support",
    icon: <BsHeadphones />,
    color: "yellow",
  },
];

export default Offer;
