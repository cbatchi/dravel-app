import styled from "styled-components";

const TourStyled = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
        .vectors {
          .vector1 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            left: -9rem;
          }
          .vector2 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            right: -8rem;
          }
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        button {
          padding: 0.5rem 0.7rem;
          background-color: ${({ theme }) => theme.colors.tomato};
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .price-details {
            display: flex;
            gap: 1rem;
            .price {
              color: ${({ theme }) => theme.colors.tomato};
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .stars {
                svg {
                  color: #ffc01e;
                }
              }
              .review {
                color: ${({ theme }) => theme.colors.textSecondary};
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;
    .ellipse {
      display: none;
    }
    h2 {
      transform: translateY(0px);
      font-size: 2rem;
    }
    .tours {
      flex-direction: column;
      gap: 5rem;
      .tour {
        &:nth-of-type(2) {
          transform: translateY(0);
        }
        button {
          display: none !important;
        }
        .image {
          img {
            max-inline-size: 100%;
            block-size: auto;
          }
          .vectors {
            display: none;
          }
        }
      }
    }
  }
`;

export default TourStyled;
