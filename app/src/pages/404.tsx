import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.space[16]}
    ${(props) => props.theme.space[4]} ${(props) => props.theme.space[0]}
    ${(props) => props.theme.space[4]};
  gap: ${(props) => props.theme.space[12]};
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  color: ${(props) => props.theme.color.primary[900]};
  text-align: center;
`;

const NotFound: NextPage = () => {
  return (
    <Container>
      <Image src="/img/illustration-notFound.svg" alt="" />
      <Title>Página não encontrada</Title>
    </Container>
  );
};

export default NotFound;
