import {useState} from "react"
import AddPage from "../pages/AddPage.tsx";

interface Props {
    onAddClick: () => void;
    onReadClick: () => void;
    onUpdateClick: () => void;
}

export default function List({onAddClick, onReadClick, onUpdateClick}: Props) {
    const [items, setItems] = useState<string[]>([]);

    // TODO update the list with the new item added
    const onAdd = (newItem: string) => {
        setItems([...items, newItem])
    }

    const handleAdd = () => {
        onAddClick();
    }

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
            <div className="d-flex">
                <button className="border rounded" onClick={handleAdd}>add</button>
                <ul className="
                list-group
                flex-row
                flex-wrap
                justify-content-center
                position-absolute
                top-50 start-50 translate-middle"
                >
                    {items.map(item =>
                        <li className="list-group-item border rounded" key={item}>
                            {item}
                            <button className="border rounded" onClick={handleRead}>read</button>
                            <button className="border rounded" onClick={handleUpdate}>update</button>
                            <button className="border rounded" onClick={handleDelete}>delete</button>
                        </li>)
                    }
                </ul>
            </div>
            <AddPage onAdd={onAdd}/>
        </>
    )
}
