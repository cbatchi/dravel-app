import styled from 'styled-components';


const ScrollTopStyled = styled.div`
max-width: 100vw;

.none {
  opacity: 0;
  visibility: hidden;
}

a {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ theme }) => theme.colors.tomato};
  padding: 1rem;
  border-radius: 100%;
  display: flex;justify-content:center;
  align-items: center;
  transition: .4s ease-in-out;
  z-index: 1;

  svg {
    color:  ${({ theme }) => theme.colors.white };
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1080px) {
    left: 75vw;
    right: initial;
  }
}
`;

export default ScrollTopStyled;