import List from "../components/List.tsx";
import Car from "../components/Car.tsx";
import {Dispatch, SetStateAction} from "react";

interface Props {
    items: Car[];
    setItems: Dispatch<SetStateAction<Car[]>>;
    addItem: (newItem: Car) => void;
}

export default function MainPage({props}: { props: Props }) {
    const handleAddClick = () => {
        window.open("/add", "_blank");
    }

    const handleReadClick = () => {
        window.open("/read", "_blank");
    }

    const handleUpdateClick = () => {
        window.open("/update", "_blank");
    }

    return (
        <>
            <button className="border rounded" onClick={handleAddClick}>add</button>
            <List {...props} onReadClick={handleReadClick} onUpdateClick={handleUpdateClick}
            />
        </>
    )
}
