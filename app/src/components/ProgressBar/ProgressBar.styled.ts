import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  height: 4px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.progress - 100}%);
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.color.primary[500]};
`;
