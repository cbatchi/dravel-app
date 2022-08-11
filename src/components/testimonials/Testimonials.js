import React from 'react'
import TestimonialStyled from './testimonial.styled';
import Testimonial1 from "../../assets/testimonial1.png";
import Testimonial2 from "../../assets/testimonial2.png";
import Avatar from "../../assets/avatar.png";

const Testimonials = () => {
  return (
    <TestimonialStyled id="blog">
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={Testimonial1} alt="testimonials" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={Avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Claude Batchi</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className="desrciption">
            Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a briallant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={Testimonial2} alt="testimonials" />
        </div>
      </div>
    </TestimonialStyled>
  )
}

export default Testimonials