import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("something truthy and falsy", () => {
  it("accepts true to be true", () => {
    expect(true).toBe(true);
  });

  it("accepts false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders html in the console", () => {
    render(<App />);
    screen.debug();
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    // using regex with the i flag allows simpler case-insensitive comparison
    expect(screen.getByRole("main").textContent).toMatch(/hello world/i);
  });
});
