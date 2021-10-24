import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
