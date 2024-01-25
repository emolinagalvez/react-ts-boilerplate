import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Renders a header text in home page", () => {
  render(<Home />);
  const headerElement = screen.getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});
