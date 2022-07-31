import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.ice};
  }
  html {
    font-size: 62.5%;
  }
  @media (max-width: 1250px) {
    html {
      font-size: 50%;
    }
  }
`;