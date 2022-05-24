import userEvent from "@testing-library/user-event";
import { Dropdown } from "../Dropdown";
import { render, screen, cleanup } from "./test-utils";

afterEach(cleanup);
describe("dropdown component test", () => {
  it("render dropdown components without breaking", () => {
    render(<Dropdown />);
  });
  it("check for the header element", () => {
    render(<Dropdown />);
    const headerEl = screen.getByRole("heading");
    expect(headerEl).toHaveTextContent(/select Nationality:/i);
  });
  it("the numbers of the option in select should be 17", () => {
    render(<Dropdown />);
    expect(screen.getAllByRole("option").length).toBe(17);
  });
  it("should allow user to change country", () => {
    render(<Dropdown />);
    const selectEl = screen.getByTestId("option-0");
    userEvent.selectOptions(screen.getByRole("combobox"), selectEl);
    expect(selectEl.selected).toBeTruthy();
    expect(selectEl.value).toBe("AU");
  });
});
