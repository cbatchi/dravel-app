import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollTopStyled from './scroll.styled';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <ScrollTopStyled>
      <a href="#!" className={visible ? "block" : "none"}>
        <FaChevronUp />
      </a>
    </ScrollTopStyled>
  );
};


export default ScrollToTop;
