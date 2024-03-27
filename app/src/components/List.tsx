import Car from "./Car.tsx";
import {Dispatch, SetStateAction} from "react";

export default function List({items, setItems, addItem, onReadClick, onUpdateClick}: {
    items: Car[],
    setItems: Dispatch<SetStateAction<Car[]>>,
    addItem: (newItem: Car) => void,
    onReadClick: () => void,
    onUpdateClick: () => void
}) {
    // TODO update the list with the new item added
    const handleRead = () => {
        onReadClick();
    }

    const handleUpdate = () => {
        onUpdateClick();
    }

    const handleDelete = () => {
        // TODO
    }

    return (
        <>
            <ul className="list-group">
                {items.map((item, index) =>
                    <li className="list-group-item border rounded" key={index}>
                        {item.model}
                        <button className="border rounded" onClick={handleRead}>read</button>
                        <button className="border rounded" onClick={handleUpdate}>update</button>
                        <button className="border rounded" onClick={handleDelete}>delete</button>
                    </li>)
                }
            </ul>
        </>
    )
}
