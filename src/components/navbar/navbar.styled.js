import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand img {
    cursor: pointer;
  }
  .toggle {
    display: none;
  }

  .nav-links ul {
    display: flex;
    gap: 3rem;

    li > a {
      color: initial;
      cursor: pointer;
      transition: ${({ theme }) => theme.effects.transitionDefault};

      &:hover {
        color: ${({ theme }) => theme.colors.tomato};
      }
    }

    @media screen and (max-width: 1080px) {
      position: relative;
      padding: 1rem 0.5rem;
      z-index: 10;

      .brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }

      .show {
        opacity: 1 !important;
        visibility: visible !important;
      }

      .nav-links {
        position: absolute;
        overflow-x: hidden;
        top: 0;
        right: 0;
        width: ${({ state }) => (state ? "60%" : "0%")};
        height: 100px;
        background-color: ${({ theme }) => theme.colors.tomato};
        visibility: hidden;
        transition: 0.4s ease-in-out;

        ul {
          flex-direction: column;
          text-align: center;
          height: 100%;
          justify-content: center;

          li a {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
`;

export const AccountInfos = styled.div`
  display: flex;
  gap: 2rem;

  .account,
  .search {
    cursor: pointer;
    align-items: center;
  }

  .account {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  /* Media */
  @media screen and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;

    & {
      display: none;
    }
  }
`;
