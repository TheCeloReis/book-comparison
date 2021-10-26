import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { SSRProvider } from "@react-aria/ssr";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Appbar from "../components/Appbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Appbar />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Hydrate>
      </SSRProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
