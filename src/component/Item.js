import { useEffect, useState } from "react";
import TableData from "./TableData";
import {v4} from "uuid";


const data = [
    {
        id: "1",
        name: "Pilsner",
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
    {
        id: "2",
        name: "IPA",
        minimumTemperature: 5,
        maximumTemperature: 6,
    },
    {
        id: "3",
        name: "Lager",
        minimumTemperature: 4,
        maximumTemperature: 7,
    },
    {
        id: "4",
        name: "Stout",
        minimumTemperature: 6,
        maximumTemperature: 8,
    },
    {
        id: "5",
        name: "Wheat beer",
        minimumTemperature: 3,
        maximumTemperature: 5,
    },
    {
        id: "6",
        name: "Pale Ale",
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
];

function Item() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const request = () =>
            data.forEach((product) => {
                fetch(`http://localhost:8081/temperature/${product.id}`)
                    .then((response) => response.json())
                    .then((response) =>
                        setItems((prevItems) => ({
                            ...prevItems,
                            [product.id]: {
                                ...product,
                                ...response,
                            },
                        }))
                    );
            });

        setInterval(request, 5000);

        request();
    }, []);



    return (
        <table>
            <thead>
            <tr>
                <th align="left">Product</th>
                <th align="left">Temperature</th>
                <th align="left">Status</th>
            </tr>
            </thead>
            <tbody data-testid="item-list-tableBody">
            {Object.keys(items).map((itemKey) => (
                <tr key={items[itemKey].id}>
                    <TableData val={items[itemKey].name} flag={false} key={v4()} />
                    <TableData
                        val={items[itemKey].temperature}
                        statusInfo={false}
                        key={v4()}
                    />
                    <TableData
                        storeTemp={items[itemKey].temperature}
                        key={items[itemKey].temperature+'-'+v4()}
                        minTemp={items[itemKey].minimumTemperature}
                        maxTemp={items[itemKey].maximumTemperature}
                        statusInfo={true}  key={v4()}
                    />
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Item;
