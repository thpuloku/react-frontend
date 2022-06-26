import { cleanup, render } from "@testing-library/react";
import TableData from "../component/TableData";

const testData = [
    {
        storeTemp: 7,
        minTemp: 4,
        mAXTemp: 8,
        statusInfo: true,
    },
    {
        storeTemp: 1,
        minTemp: 4,
        mAXTemp: 8,
        statusInfo: true,
    },
    {
        storeTemp: 10,
        minTemp: 4,
        mAXTemp: 8,
        statusInfo: true,
    },
    {
        storeTemp: -1,
        minTemp: 4,
        mAXTemp: 8,
        statusInfo: true,
    },
];

describe("<TableData />", () => {
    it("renders without errors", () => {
        render(<TableData  />);
    });
    afterEach(cleanup);

    it("should return all good for status according to the pass variable", () => {
        const {getByTestId } = render(
            <TableData
                storeTemp={testData[0].storeTemp}
                minTemp={testData[0].minTemp}
                maxTemp={testData[0].mAXTemp}
                statusInfo={testData[0].statusInfo}
            />
        );

        expect(getByTestId("test-span").textContent).toEqual("all good");
    });
    it("should return too low for status according to the pass variable", () => {
        const { getByTestId } = render(
            <TableData
                storeTemp={testData[1].storeTemp}
                minTemp={testData[1].minTemp}
                maxTemp={testData[1].mAXTemp}
                statusInfo={testData[1].statusInfo}
            />
        );

        expect(getByTestId("test-span").textContent).toEqual("too low");
    });

    it("should return too high for status according to the pass variable", () => {
        const { getByTestId } = render(
            <TableData
                storeTemp={testData[2].storeTemp}
                minTemp={testData[2].minTemp}
                maxTemp={testData[2].mAXTemp}
                statusInfo={testData[2].statusInfo}
            />
        );

        expect(getByTestId("test-span").textContent).toEqual("too high");
    });

    it("should return too low for status according to the pass variable", () => {
        const { container, getByTestId } = render(
            <TableData
                storeTemp={testData[3].storeTemp}
                minTemp={testData[3].minTemp}
                maxTemp={testData[3].mAXTemp}
                statusInfo={testData[3].statusInfo}
            />
        );

        expect(getByTestId("test-span").textContent).toEqual("too low");
    });
});
