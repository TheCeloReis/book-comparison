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

  #goodreads-widget {
    font-family: georgia, serif;
    padding: 18px 0;
    width: 565px;
  }
  #goodreads-widget h1 {
    font-weight: normal;
    font-size: 16px;
    border-bottom: 1px solid #bbb596;
    margin-bottom: 0;
  }
  #goodreads-widget a {
    text-decoration: none;
    color: #660;
  }
  iframe {
    background-color: #fff;
  }
  #goodreads-widget a:hover {
    text-decoration: underline;
  }
  #goodreads-widget a:active {
    color: #660;
  }
  #gr_footer {
    width: 100%;
    border-top: 1px solid #bbb596;
    text-align: right;
  }
  #goodreads-widget .gr_branding {
    color: #382110;
    font-size: 11px;
    text-decoration: none;
    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${GlobalStyleCSS}
`;

export default GlobalStyle;
