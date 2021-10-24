import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

import { fonts } from "./font";

const GlobalStyleCSS = css`
  ${reset}
  ${fonts}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    font-family: "Circular Std", sans-serif;
  }

  body {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${GlobalStyleCSS}
`;

export default GlobalStyle;
