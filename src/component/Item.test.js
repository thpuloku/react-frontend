import React from "react";
import {  render } from "@testing-library/react";
import Item from "../component/Item";
import { unmountComponentAtNode } from "react-dom";

jest.mock("../component/TableData", () => ({
    mockTableData: jest.fn(() => <div data-testid="mockTableData" />),
}));

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("when mock the child component it must have table body", () => {
    const { queryAllByTestId } = render(<Item />, container);
    expect(queryAllByTestId("item-list-tableBody")).toHaveLength(1);
});

