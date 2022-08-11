import styled from 'styled-components';

const OfferStyled = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;

  .offer-image {
    img {
      height: 35rem;
    }
  }

  .offer-content {
    &-title {
      margin: 2rem 0;

      h1 { font-size: 3rem; }
    }

    &-list {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 4rem 0;

        .icon {
          padding: .5rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
        .red {
          background-color: #ff3010aa;
          color: ${({ theme }) => theme.colors.white};
        }
        .green {
          background-color: #65ce5455;
          color: #65ce54;
        }
        .yellow {
          background-color: #ffc01e55;
          color: #ffc01e;
        }
        .text h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;

    .offer-image {
      img { max-inline-size: 100%; block-size: auto;}
    }
    .offer-content {
      &-title h1 {
        font-size: 2rem;
        text-align: center;
      }
      &-list {
        li {
          gap: 1rem;
          margin: 2rem 0;

          .text h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export default OfferStyled;