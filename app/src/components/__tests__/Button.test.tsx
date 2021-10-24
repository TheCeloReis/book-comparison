import Button from "../Button";
import { render, screen, fireEvent } from "../../lib/test.utils";
import userEvent from "@testing-library/user-event";

describe("<Button /> Component", () => {
  it("renders the component with the provided content", () => {
    const text = "Hello World";

    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("fires a event after clicking in it", () => {
    const onPress = jest.fn();

    render(<Button onPress={onPress}>Hello World</Button>);

    expect(onPress).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("button"));
    expect(onPress).toBeCalledTimes(1);
  });
});
