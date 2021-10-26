import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${(props) => props.theme.space[8]} ${(props) => props.theme.space[4]};
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;

  ${media.greaterThan("small")`
    grid-template-columns: 1fr 2fr;
  `}
`;

export const CoverImg = styled.img`
  /* Warning, poor support */
  aspect-ratio: 1 / 1;
  width: 100%;
  object-position: center;
  object-fit: contain;
  margin-bottom: ${(props) => props.theme.space[4]};

  ${media.greaterThan("small")`
    margin-bottom: 0;
  `}
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const Author = styled.p`
  font-size: ${(props) => props.theme.fontSize["sm"]};
  color: ${(props) => props.theme.color.gray[700]};
`;

export const Details = styled.div`
  margin-top: ${(props) => props.theme.space[8]};
  margin-bottom: ${(props) => props.theme.space[4]};

  h2 {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;

export const DetailsList = styled.ul`
  padding-left: ${(props) => props.theme.space[2]};
`;

export const DetailsListItem = styled.li`
  color: ${(props) => props.theme.color.gray[700]};
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const DetailsListItemLabel = styled.span`
  color: ${(props) => props.theme.color.gray[900]};
  font-weight: bold;
`;
