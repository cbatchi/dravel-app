import styled from 'styled-components';

const DestinationsStyled = styled.section`
  display: flex;
  gap: 5rem;
  
  .destination-infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    h2 {
      font-size: 3rem;
      line-height: 3rem;
      text-transform: capitalize;

      span { color: ${({ theme}) => theme.colors.tomato}; }
    }

    p { color: ${({ theme}) => theme.colors.textSecondary}; }
  }

  .destination-lists {
    flex: 2;
    display: flex;
    gap: 2rem;

    .destination-list {
      position: relative;

      img { height: 20rem;}

      .name {
        position: absolute;
        bottom: 0;

        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        );
        display: flex;
        flex-direction: column-reverse;

        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: ${({ theme}) => theme.colors.white };
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;

    .destination-lists {
      flex-direction: column-reverse;

      .destination-list {
        img {width: 100%;}
      }
    }
  }
`;

export default DestinationsStyled;