import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";

const mockAddToCart = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: () => ({
      handleAddToCart: mockAddToCart,
    }),
  };
});

vi.mock("../components/Fetch", () => {
  return {
    default: vi.fn(),
  };
});

vi.mock("../components/Card", () => {
  return {
    default: ({ product, onAddToCart }) => (
      <div>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <button onClick={() => onAddToCart(product, 1)}>Add mocked item</button>
      </div>
    ),
  };
});

import Fetch from "../components/Fetch";

const products = [
  {
    id: 1,
    title: "Alpha Product",
    price: 10,
    description: "First item",
    category: "electronics",
    image: "/alpha.png",
  },
  {
    id: 2,
    title: "Beta Product",
    price: 20,
    description: "Second item",
    category: "jewelery",
    image: "/beta.png",
  },
];

describe("Shop", () => {
  beforeEach(() => {
    vi.mocked(Fetch).mockImplementation(async (setCardData) => {
      setCardData(products);
    });
    mockAddToCart.mockClear();
  });

  it("shows a loading state before the products are ready", () => {
    render(<Shop />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("renders categories and product cards after loading", async () => {
    render(<Shop />);

    expect(await screen.findByRole("combobox")).toBeEnabled();
    expect(screen.getByRole("option", { name: "All" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Electronics" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Jewelery" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Alpha Product")).toBeInTheDocument();
    expect(screen.getByText("Beta Product")).toBeInTheDocument();
  });

  it("filters the visible cards by category", async () => {
    const user = userEvent.setup();

    render(<Shop />);

    await screen.findByRole("combobox");
    await user.selectOptions(screen.getByRole("combobox"), "electronics");

    expect(screen.getByText("Alpha Product")).toBeInTheDocument();
    expect(screen.queryByText("Beta Product")).not.toBeInTheDocument();
  });

  it("passes add-to-cart events through to the outlet context handler", async () => {
    const user = userEvent.setup();

    render(<Shop />);

    await screen.findByText("Alpha Product");
    await user.click(
      screen.getAllByRole("button", { name: "Add mocked item" })[0],
    );

    expect(mockAddToCart).toHaveBeenCalledWith(products[0], 1);
  });
});
