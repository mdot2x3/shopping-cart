import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";

const product = {
  id: 1,
  title: "Test Product",
  price: 19.99,
  image: "/test-image.png",
  quantity: 2,
};

describe("CartItem", () => {
  beforeEach(() => {
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the item details, subtotal, and quantity controls", () => {
    render(
      <CartItem
        product={product}
        onQuantityChange={vi.fn()}
        onDelete={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("img", { name: product.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByText("$39.98")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("updates the parent when the quantity changes", async () => {
    const user = userEvent.setup();
    const onQuantityChange = vi.fn();

    render(
      <CartItem
        product={product}
        onQuantityChange={onQuantityChange}
        onDelete={vi.fn()}
      />,
    );

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "4");

    expect(onQuantityChange).toHaveBeenCalledWith(product.id, 4);
    expect(screen.getByText("$79.96")).toBeInTheDocument();
  });

  it("asks for confirmation before removing the item", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <CartItem
        product={product}
        onQuantityChange={vi.fn()}
        onDelete={onDelete}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(window.confirm).toHaveBeenCalledWith(
      'Remove "Test Product" from cart?',
    );
    expect(onDelete).toHaveBeenCalledWith(product.id);
  });

  it("does not remove the item if confirmation is cancelled", async () => {
    window.confirm.mockReturnValueOnce(false);
    const user = userEvent.setup();
    const onDelete = vi.fn();

    render(
      <CartItem
        product={product}
        onQuantityChange={vi.fn()}
        onDelete={onDelete}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(window.confirm).toHaveBeenCalled();
    expect(onDelete).not.toHaveBeenCalled();
  });
});
