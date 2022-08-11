import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styles/global.styled';
import Theme from './styles/theme.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Theme>
      <GlobalStyled />
      <App />
    </Theme>
  </StrictMode>
);

