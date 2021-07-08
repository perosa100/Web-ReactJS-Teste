import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Proxima Nova";
   font-weight: 400;
  font-display:swap;
  src: url("/fonts/proxima.nova.regular.ttf") format("opentype");
}

@font-face {
  font-family: "Proxima Nova Bold";
  font-display:swap;
  src: url("/fonts/proxima.nova.bold.ttf") format("opentype");
}

@font-face {
  font-family: "Proxima Nova Extrabold";
  font-display: swap;
  src: url("/fonts/proxima.nova.extrabold.ttf") format("opentype");
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.mainBg};
    }
  `}

`

export default GlobalStyles
