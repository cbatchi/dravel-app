import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.tomato};
  border: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom-left-radius: 5%;
  border-top-right-radius: 5%;
  text-transform: capitalize;

  transition: .5s ease-in-out;

`;

export default ButtonStyled;