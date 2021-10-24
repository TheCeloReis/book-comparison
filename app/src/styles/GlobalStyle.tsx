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
`;

const GlobalStyle = createGlobalStyle`
  ${GlobalStyleCSS}
`;

export default GlobalStyle;
