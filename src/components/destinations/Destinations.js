import React from 'react';
import Cuba from "../../assets/cuba.png";
import Paris from "../../assets/paris.png";
import Japan from "../../assets/japan.png";
import DestinationsStyled from './destinations.styled';
import Button from '../button/Button';

const Destinations = () => {

  return (
    <DestinationsStyled id="destination">
      <div className="destination-infos">
        <h2>Top <span>destinations</span>in the world</h2>
        <p>It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout from it.</p>
        <Button>discover more</Button>
      </div>
      <div className="destination-lists">
        {sources.map(({ name, image }, key) => (
          <div className="destination-list" key={key}>
            <div className="image">
              <img src={image} alt="destination" />
            </div>
            <div className="name">
              <h3>{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </DestinationsStyled>
  )
}

const sources = [
  { name: "Cuba City", image: Cuba },
  { name: "Paris", image: Paris },
  { name: "Japon ", image: Japan },
];

export default Destinations