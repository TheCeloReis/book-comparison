import { FC, useRef } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.main};
`;

type BaseProps = Parameters<typeof useButton>[0];

interface Props extends BaseProps {}

const Button: FC<Props> = (props) => {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <StyledButton {...buttonProps} ref={ref}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
