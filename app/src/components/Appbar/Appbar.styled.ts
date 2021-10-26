import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background: linear-gradient(90.11deg, #1b2a68 0%, #091958 100%);
  box-shadow: 0 1px 4px rgb(19 26 45 / 20%);
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;

  margin-right: ${({ theme }) => theme.space[2]};
`;

export const LogoText = styled.div`
  display: none;
  color: ${({ theme }) => theme.color.white};

  ${media.greaterThan("medium")`
    display: block;
  `}
`;

export const LogoName = styled.p`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
`;

export const LogoDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize["sm"]};
`;
