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
    expect(queryAllByTestId("mockTableData")).toHaveLength(0);
});

test("when mock the child component it must have table body", () => {
    const { queryAllByTestId } = render(<Item />, container);
    expect(queryAllByTestId("item-list-tableBody")).toHaveLength(1);
});

// // test("when mock the", () => {
// //   const { getByTestId } = render(<Item />);
// //   // expect(mockTableData).not.toHaveBeenCalled();
// //
// //   expect(getByTestId("test-data-testid").textContent).toEqual(
// //     "Table Data is there"
// //   );
// // });
//

// // const mockTableData = jest.fn();
// //
// // jest.mock("../component/TableData", () => (props) => {
// //   mockTableData();
// //   return <mock-tableData />;
// // });
// //
// // jest.mock("../component/api", () => ({ apiGetMethod: jest.fn() }));
// // apiGetMethod.mockImplementation(() => Promise.all.resolve("test1234"));
// // test("when mock the", () => {
// //   render(<Item />);
// //   expect(mockTableData).not.toHaveBeenCalled();
// // });
// //
//jest.mock("../component/api", () => ({ apiGetMethod: jest.fn() }));
//apiGetMethod.mockImplementation(() => Promise.all.resolve("test1234"));

// // test("when mock the", () => {
// //   const { getByTestId } = render(<Item />);
// //   // expect(mockTableData).not.toHaveBeenCalled();
// //
// //   expect(getByTestId("test-data-testid").textContent).toEqual(
// //     "Table Data is there"
// //   );
// // });
//

// // const mockTableData = jest.fn();
// //
// // jest.mock("../component/TableData", () => (props) => {
// //   mockTableData();
// //   return <mock-tableData />;
// // });
// //
// // jest.mock("../component/api", () => ({ apiGetMethod: jest.fn() }));
// // apiGetMethod.mockImplementation(() => Promise.all.resolve("test1234"));
// // test("when mock the", () => {
// //   render(<Item />);
// //   expect(mockTableData).not.toHaveBeenCalled();
// // });
// //
//jest.mock("../component/api", () => ({ apiGetMethod: jest.fn() }));
//apiGetMethod.mockImplementation(() => Promise.all.resolve("test1234"));
