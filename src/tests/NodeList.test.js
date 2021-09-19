import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NodeList from "../components/NodeList";

test("Renders correct amount of nodes", () => {
  const nodes = [
    {
      id: 1,
      name: "Testing",
      type: "manipulator",
    },
    {
      name: "Adding",
      type: "predictor",
      id: 2,
    },
    {
      name: "checking",
      type: "source",
      id: 3,
    },
    {
      name: "something",
      type: "manipulator",
      id: 4,
    },
  ];

  const component = render(<NodeList nodes={nodes} />);

  const listItems = component.getAllByRole("listitem");

  expect(listItems.length).toBe(4);
});

test("Deleting gets called when clicked", () => {
  const nodes = [
    {
      id: 1,
      name: "Testing",
      type: "manipulator",
    },
    {
      name: "Adding",
      type: "predictor",
      id: 2,
    },
    {
      name: "checking",
      type: "source",
      id: 3,
    },
    {
      name: "something",
      type: "manipulator",
      id: 4,
    },
  ];

  const mockHandler = jest.fn();

  const component = render(
    <NodeList nodes={nodes} handleDelete={mockHandler} />
  );

  const button = component.getAllByText("Delete");

  fireEvent.click(button[0]);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
