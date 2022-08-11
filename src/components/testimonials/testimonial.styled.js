import styled from "styled-components";

const TestimonialStyled = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 8rem;
            border-radius: 50%;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .desrciption {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;

export default TestimonialStyled;
