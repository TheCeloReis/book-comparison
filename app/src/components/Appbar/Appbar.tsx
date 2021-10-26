import React from "react";
import ProgressBar from "../ProgressBar";
import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "./Appbar.styled";

const Appbar = () => {
  const router = useRouter();

  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <S.LogoContainer>
            <S.Logo src="/img/logo-small.png" alt="logo" />
            <S.LogoText>
              <S.LogoName as={router.pathname === "/" ? "h1" : undefined}>
                BookParison
              </S.LogoName>
              <S.LogoDescription>Avalie avaliações de livros</S.LogoDescription>
            </S.LogoText>
          </S.LogoContainer>
        </Link>
      </S.Container>
      <ProgressBar />
    </S.Header>
  );
};

export default Appbar;
