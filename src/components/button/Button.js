import React from 'react'
import ButtonStyled from './button.styled'

const Button = ({ children }) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

export default Button