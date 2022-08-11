import React from "react";
import TourStyled from "./tour.styled";
import { BsFillStarFill } from "react-icons/bs";
import Tour1 from "../../assets/tour1.png";
import Tour2 from "../../assets/tour2.png";
import Tour3 from "../../assets/tour3.png";
import Vector1 from "../../assets/vector1.png";
import Vector2 from "../../assets/vector2.png";
import Ellipse from "../../assets/ellipse.png";

const Tours = () => {
  return (
    <TourStyled id="tour">
      <h2>Choose Your Destination</h2>
      <img src={Ellipse} alt="ellipse" className="ellipse" />
      <div className="tours">
        {sources.map(({ image, title, price, reviews }, index) => {
          return (
            <div className="tour" key={title}>
              <div className="image">
                <img src={image} alt="tour" />
                {index === 1 && (
                  <div className="vectors">
                    <img src={Vector1} alt="vector" className="vector1" />
                    <img src={Vector2} alt="vector" className="vector2" />
                  </div>
                )}
              </div>
              <div className="info">
                <div className="details">
                  <h4>{title}</h4>
                  <div className="price-details">
                    <span className="price">${price}</span>
                    <div className="reviews">
                      <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                      <span className="review">{reviews}</span>
                    </div>
                  </div>
                </div>
                <button>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </TourStyled>
  );
};

const sources = [
  {
    image: Tour1,
    title: "Santorini, Oia Greece",
    price: 2000,
    reviews: "5k Reviews",
  },
  {
    image: Tour2,
    title: "Lighthouse, Bellwood",
    price: 4000,
    reviews: "5k Reviews",
  },
  {
    image: Tour3,
    title: "Riverfront, Japan",
    price: 3000,
    reviews: "5k Reviews",
  },
];

export default Tours;
