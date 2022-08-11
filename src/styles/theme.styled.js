import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    tomato: "#ff715b",
    grey: "#f8f8f8",
    white: "#ffffff",
    textPrimary: "#2c2c2c",
    textSecondary: "#a79997",
  },
  effects: {
    transitionDefault: ".5s ease-in-out"
  },
  fonts: {

  },
  medias: {

  }
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;