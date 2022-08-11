import styled from 'styled-components';

export const ServicesSection = styled.section`
  margin: 8rem 4rem;
  @media screen and (max-width: 1080px) {
    margin: 3rem;
  }
`;

export const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    & {
      grid-template-columns: 1fr;
    }
  }
  `;
export const ServiceContent = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 1.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition:  ${({ theme }) => theme.effects.transitionDefault};

  h3 { color: ${({ theme }) => theme.colors.textPrimary}};
  p{ color: ${({ theme }) => theme.colors.textSecondary}};
  img {
    width: 128px;
    height: 128px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

`;
