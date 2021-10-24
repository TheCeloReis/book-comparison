import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1rem);
  gap: 2px;
  padding-right: ${(props) => props.theme.space[1]};

  svg {
    color: ${(props) => props.theme.color.primary[500]};
  }
`;

export const StarValue = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: medium;
  color: ${(props) => props.theme.color.gray[800]};
`;
