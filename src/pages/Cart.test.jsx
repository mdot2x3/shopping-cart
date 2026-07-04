import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

const mockOutletContext = {
  cart: [],
  handleUpdateQuantity: vi.fn(),
  handleDeleteItem: vi.fn(),
  handleClearCart: vi.fn(),
};

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: () => mockOutletContext,
    Link: ({ to, children, ...props }) => (
      <a href={typeof to === "string" ? to : "#"} {...props}>
        {children}
      </a>
    ),
  };
});

vi.mock("../components/CartItem", () => {
  return {
    default: ({ product }) => (
      <div>
        <h3>{product.title}</h3>
        <p>Mock CartItem</p>
      </div>
    ),
  };
});

describe("Cart", () => {
  beforeEach(() => {
    mockOutletContext.cart = [];
    mockOutletContext.handleUpdateQuantity.mockClear();
    mockOutletContext.handleDeleteItem.mockClear();
    mockOutletContext.handleClearCart.mockClear();
  });

  it("shows the empty cart message when there are no items", () => {
    render(<Cart />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Your Cart" }),
    ).not.toBeInTheDocument();
  });

  it("renders cart items and the order summary when the cart has items", () => {
    mockOutletContext.cart = [
      {
        id: 1,
        title: "Alpha Product",
        price: 10,
        quantity: 2,
        image: "/alpha.png",
      },
      {
        id: 2,
        title: "Beta Product",
        price: 5,
        quantity: 3,
        image: "/beta.png",
      },
    ];

    render(<Cart />);

    expect(
      screen.getByRole("heading", { name: "Your Cart" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Alpha Product")).toBeInTheDocument();
    expect(screen.getByText("Beta Product")).toBeInTheDocument();
    expect(screen.getByText("Total items: 5")).toBeInTheDocument();
    expect(screen.getByText("Total cost: $35.00")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Checkout" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Clear Cart" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Continue Shopping" }),
    ).toBeInTheDocument();
  });

  it("calls handleClearCart when Clear Cart is clicked", async () => {
    const user = userEvent.setup();

    mockOutletContext.cart = [
      {
        id: 1,
        title: "Alpha Product",
        price: 10,
        quantity: 2,
        image: "/alpha.png",
      },
    ];

    render(<Cart />);

    await user.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(mockOutletContext.handleClearCart).toHaveBeenCalledTimes(1);
  });
});
