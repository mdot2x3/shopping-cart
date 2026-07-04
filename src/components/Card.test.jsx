import { afterEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

const product = {
  id: 1,
  title: "Test Product",
  description: "A product used for testing.",
  price: 19.99,
  category: "test category",
  image: "/test-image.png",
};

describe("Card", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the product details and default price", () => {
    render(<Card product={product} onAddToCart={vi.fn()} />);

    expect(
      screen.getByRole("img", { name: product.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: product.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add to Cart" }),
    ).toBeInTheDocument();
  });

  it("passes the selected quantity and product to onAddToCart when the button is clicked", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    render(<Card product={product} onAddToCart={onAddToCart} />);

    const quantityInput = screen.getByRole("textbox");
    await user.clear(quantityInput);
    await user.type(quantityInput, "3");

    await user.click(screen.getByRole("button", { name: "Add to Cart" }));

    expect(onAddToCart).toHaveBeenCalledWith(product, 3);
    expect(screen.getByText("3 added to cart!")).toBeInTheDocument();
    expect(screen.queryByText("$19.99")).not.toBeInTheDocument();
  });

  it("shows the added message briefly and then restores the price", async () => {
    vi.useFakeTimers();
    const onAddToCart = vi.fn();

    render(<Card product={product} onAddToCart={onAddToCart} />);

    fireEvent.click(screen.getByRole("button", { name: "Add to Cart" }));
    expect(screen.getByText("1 added to cart!")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(screen.queryByText("1 added to cart!")).not.toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
  });
});
