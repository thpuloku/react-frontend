export default function TableData(props) {
    if (props.statusInfo) {
        return (

                <td width={150}>
                    {props.storeTemp < props.minTemp && (
                        <span data-testid="test-span">too low</span>
                    )}
                    {props.storeTemp > props.maxTemp && (
                        <span data-testid="test-span">too high</span>
                    )}
                    {props.storeTemp <= props.maxTemp &&
                        props.storeTemp >= props.minTemp && (
                            <span data-testid="test-span">all good</span>
                        )} </td>
        );
    } else {
        return (
            <td width={150} >
                {props.val}
            </td>
        );
    }
}
