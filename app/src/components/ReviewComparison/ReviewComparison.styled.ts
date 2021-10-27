import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[4]}
    ${(props) => props.theme.space[16]} ${(props) => props.theme.space[4]};

  h2 {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    margin-bottom: ${(props) => props.theme.space[8]};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  tr > th:first-child {
    width: 200px;
  }

  tr > th:not(:first-child) {
    width: calc(50% - 100px);
  }
`;

export const TableBody = styled.tbody`
  td {
    padding: ${(props) => props.theme.space[2]};
  }

  td:first-child {
    font-weight: 900;
    color: ${(props) => props.theme.color.gray[800]};
    font-size: ${(props) => props.theme.fontSize.sm};
    vertical-align: middle;
  }

  td:not(:first-child) {
    text-align: center;
    vertical-align: middle;
  }
`;

export const Logo = styled.img`
  height: 36px;
  aspect-ratio: 5/2;
  object-fit: contain;
  object-position: center;

  ${media.greaterThan("medium")`
    height: 75px;
  `}
`;

export const TableRatingRow = styled.tr`
  td:not(:first-child) > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const RatingCount = styled.span`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.color.gray[700]};
`;

export const RatingText = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-top: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.color.gray[600]};
`;
