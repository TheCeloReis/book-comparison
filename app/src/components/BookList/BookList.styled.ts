import styled from "styled-components";
import media from "styled-media-query";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: ${(props) => props.theme.space[3]};
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[4]};

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `}
`;
