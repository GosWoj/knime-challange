import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Node from "../components/Node";

test("Correctly renders node", () => {
  const node = {
    id: 1,
    name: "Testing",
    type: "manipulator",
  };

  const component = render(<Node node={node} />);

  const name = component.getByText("Testing");
  expect(name).toBeDefined();
  const type = component.getByText("manipulator");
  expect(type).toBeDefined();
});

test("Clicking button calls event handler", () => {
  const node = {
    id: 1,
    name: "Testing",
    type: "manipulator",
  };

  const mockHandler = jest.fn();

  const component = render(<Node node={node} handleDelete={mockHandler} />);
  const button = component.getByText("Delete");

  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
