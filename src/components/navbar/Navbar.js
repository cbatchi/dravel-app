import React, { useState } from "react";
import { AccountInfos, NavbarContainer } from "./navbar.styled";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsOpenNav(false));

  const handleMenuState = (e) => {
    e.stopPropagation();
    setIsOpenNav(true);
  };

  return (
    <NavbarContainer state={isOpenNav ? 1 : 0}>
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <NavMenuToggles isOpenNav={isOpenNav} handleMenuState={handleMenuState} />
      
      <NavMenuLinks isOpenNav={isOpenNav} items={["home", "destination", "offer", "tour", "blog"]} />

      <AccountInfos>
        <div className="account">
          <span>
            <BsPerson />
          </span>
          <span>Mon compte</span>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
      </AccountInfos>

    </NavbarContainer>
  );
};

const NavMenuToggles = ({ isOpenNav, handleMenuState }) => {
  return (
    <div className="toggle">
      {isOpenNav ? (
        <MdClose onClick={isOpenNav} />
      ) : (
        <GiHamburgerMenu onClick={handleMenuState} />
      )}
    </div>
  );
};

const NavMenuLinks = ({ items, isOpenNav }) => {
  return (
    <div className={`nav-links ${isOpenNav ? 'show': ''}`}>
      <ul>
        {items.map((item, key) => (
          <li key={key}>
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
