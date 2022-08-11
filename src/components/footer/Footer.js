import React from 'react'
import Button from '../button/Button';
import Container from './footer.styled';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <p className="desciption">
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul>
            <li>
              <span> +0213 456 987 </span>
            </li>
            <li>
              <span>kishansheth21@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <Button>Subscribe Now"</Button>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel. Designed by <a href="#!">Claude Batchi</a>
        </span>
      </div>
    </Container>
  );
}


const quickLinks = [
  "About Us",
  "Destinations",
  "Latest Blog",
  "Our Team",
  "Contact Us",
];
const supportLinks = [
  "Customer Support",
  "Privacy Policy",
  "Terms & Condition",
  "Forum",
  "Tour Guide",
];

export default Footer