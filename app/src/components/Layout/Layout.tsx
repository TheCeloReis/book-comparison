import React from "react";
import Head from "next/head";

import * as S from "./Layout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Head>
        <title>BookParison - Avalie avaliações de livros</title>
        <meta
          name="description"
          content="Avalie avaliações de livros de forma simples e rápida, sem sair do nosso app."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tag-challenge.web.app/" />
        <meta
          property="og:title"
          content="BookParison - Avalie avaliações de livros"
        />
        <meta
          property="og:description"
          content="Avalie avaliações de livros de forma simples e rápida, sem sair do nosso app."
        />
        <meta
          property="og:image"
          content="https://tag-challenge.web.app/img/meta-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tag-challenge.web.app/" />
        <meta
          property="twitter:title"
          content="BookParison - Avalie avaliações de livros"
        />
        <meta
          property="twitter:description"
          content="Avalie avaliações de livros de forma simples e rápida, sem sair do nosso app."
        />
        <meta
          property="twitter:image"
          content="https://tag-challenge.web.app/img/meta-image.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/img/icon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/img/icon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/img/icon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/img/icon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/img/icon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/img/icon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/img/icon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/img/icon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/img/icon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/img/icon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/img/icon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
    </S.Container>
  );
};

export default Layout;
