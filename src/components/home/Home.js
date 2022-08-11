import React, { useState, useEffect } from 'react';
import HeroImage from '../../assets/hero.png';
import HeroSection from './home.styled';
import Button from '../button/Button';


const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <HeroSection>
      <div className='hero-background'>
        <img src={HeroImage} alt="Hero" />
      </div>

      <div className="hero-content">
        <div className="infos">
          <h1 className='title'>It's time to <br />Explore the World</h1>
          <Button>Plan your trip</Button>
        </div>
      </div>

      <div className="hero-planner">
        <form className='form'>
          <div className="row">
            <label htmlFor="">Destinations</label>
            <select>
              <option value="">Madrid</option>
              <option value="">Dubai</option>
            </select>
          </div>
          <div className="row">
            <label htmlFor="">Check In</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="row">
            <label htmlFor="">Price Range</label>
            <input type="text" placeholder='example: 200 - 500 Euro' name="price" id="price" value={value} />
          </div>
          <div className="row">
            <Button>Discover More</Button>
          </div>
        </form>
      </div>
    </HeroSection>
  )
}

export default Home