import styled from 'styled-components';

export default styled.section`
  margin-top: 2rem;
  position: relative;

  .hero-background img {
    height: 90vh;
    width: 100%;
  }

  .hero-content .infos {
    position: absolute;
    top: 5rem;
    left: 8rem;

    h1.title {
      font-size: 5rem;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }
  }

  .hero-planner {
    position: absolute;
    right: 0;
    width: 70%;
    bottom: -2rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    box-shadow: 0px 7px 30px 0px rgba(100, 100, 111, .2);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    .form {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6rem;

      .row {
        display: flex;
        flex-direction: column;
        text-align: start;

        label {
          font: size 0.7rem;
          color: ${({ theme }) => theme.colors.texSecondary};
        }

        input[type=date]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(58%) 
            sepia(68%) 
            saturate(2588%)
            hue-rotate(325deg)
            brightness(105%)
            contrast(101%);
        }

        input:focus { outline: none; }

        input,
        select {
          border: none;
          width: 100%;
          color: ${({ theme }) => theme.colors.tomato};
          background-color: ${({ theme }) => theme.colors.white};
          margin-top: 0.5rem;
          padding-bottom: .3rem;
          border-bottom: 1px solid #f5ebe9;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .hero-background {
      img {
        height: 50vh;
      }
    }

    .hero-content {
      .infos {
        margin-left: 2px;
      }
      h1.title {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    }

    .hero-planner {
      position: initial;
      margin: 2rem;

      .form {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;