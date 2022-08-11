import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 5rem;
    margin-top: 2rem;
    font-family: 'Poppins', sans-serif;
  }

  @media screen and (max-width: 1080px) {
    body {
      margin: 0;
    }
  }

  html {
    scroll-behavior: smooth;
  }
  ul {
    list-style: none;
    text-decoration: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
  width: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color:  ${({ theme }) => theme.colors.tomato};
  }
`;
