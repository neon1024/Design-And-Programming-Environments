import Car from "../components/Car.tsx";
import {Dispatch, SetStateAction} from "react";

interface Props {
    items: Car[];
    setItems: Dispatch<SetStateAction<Car[]>>;
}

export default function ReadPage({props}: { props: Props }) {
    const items = props.items;

    // TODO index for the selected item

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h3>{items[0].brand}</h3>
                <h3>{items[0].model}</h3>
                <h3>{items[0].year}</h3>
            </div>
        </>
    );
}
