import {useState} from "react"

export default function List({onAddClick, onReadClick, onUpdateClick}: {
    onAddClick: () => void;
    onReadClick: () => void;
    onUpdateClick: () => void;
}) {
    const [items, setItems] = useState<string[]>([]);

    // TODO open a new web page with an add item menu
    // TODO update the list with the new item added
    const handleAdd = () => {
        const newItem = "" + items.length;

        onAddClick();

        setItems([...items, newItem])
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
            <ul className="
                list-group
                flex-row
                flex-wrap
                justify-content-center
                position-absolute
                top-50 start-50 translate-middle"
            >
                <button className="border rounded" onClick={handleAdd}>add</button>
                {items.map(item =>
                    <li className="list-group-item border rounded" key={item}>
                        {item}
                        <button className="border rounded" onClick={handleRead}>read</button>
                        <button className="border rounded" onClick={handleUpdate}>update</button>
                        <button className="border rounded" onClick={handleDelete}>delete</button>
                    </li>)
                }
            </ul>
        </>
    )
}
