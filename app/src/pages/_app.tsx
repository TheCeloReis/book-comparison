import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { SSRProvider } from "@react-aria/ssr";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <ThemeProvider theme={theme} />
          <Component {...pageProps} />
        </Hydrate>
      </SSRProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
