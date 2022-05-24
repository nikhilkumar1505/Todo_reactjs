import userEvent from "@testing-library/user-event";
import { RadioButtons } from "../RadioButtons";
import { render, screen, cleanup } from "./test-utils";

describe("testing block for radio buttons componets", () => {
  it("render the radio buttons components without breaking", () => {
    render(<RadioButtons />);
  });
  it("there should three radio buttons", () => {
    render(<RadioButtons />);
    expect(screen.getAllByRole("radio").length).toBe(3);
  });
  it("user should change the genders", () => {
    render(<RadioButtons />);
    const radioEl = screen.getAllByRole("radio");
    expect(radioEl[0]).not.toBeChecked();
    userEvent.click(radioEl[0]);
    expect(radioEl[0]).toBeChecked();
  });
});
