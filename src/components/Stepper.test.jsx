import { useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stepper from "./Stepper";

// small wrapper that behaves like real parent state
// this lets Stepper re-render after input changes maintaining the prior value, which mock setter vi.fn() cannot do.
function StepperHarness() {
  const [quantity, setQuantity] = useState(1);

  return <Stepper quantity={quantity} setQuantity={setQuantity} />;
}

describe("Stepper", () => {
  it("increments and decrements the quantity, but never goes below 1", async () => {
    const user = userEvent.setup();
    const setQuantity = vi.fn();

    render(<Stepper quantity={1} setQuantity={setQuantity} />);

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(setQuantity).toHaveBeenCalledWith(2);

    await user.click(screen.getByRole("button", { name: "-" }));
    expect(setQuantity).toHaveBeenCalledWith(1);
  });

  it("allows manual typing of a valid quantity", async () => {
    const user = userEvent.setup();

    render(<StepperHarness />);

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "4");

    expect(input).toHaveValue("4");
  });

  it("resets an empty value back to 1 when the input loses focus", async () => {
    const user = userEvent.setup();

    render(<StepperHarness />);

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.tab();

    expect(input).toHaveValue("1");
  });
});
