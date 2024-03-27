import Car from "./Car.tsx";
import {Dispatch, SetStateAction} from "react";

interface Props {
    items: Car[];
    setItems: Dispatch<SetStateAction<Car[]>>;
}

export default function List({props, onReadClick, onUpdateClick}: { props: Props, onReadClick: () => void, onUpdateClick: () => void }) {
    const items = props.items;
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
