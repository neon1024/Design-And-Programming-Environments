import {useContext} from "react";
import Context from "./Context.tsx"

interface Props {
    onReadClick: () => void,
    onUpdateClick: () => void
}

export default function List(props: Props) {
    const data = useContext(Context);
    const items = data.items;

    // TODO update the list with the new item added

    const handleRead = () => {
        props.onReadClick();
    }

    const handleUpdate = () => {
        props.onUpdateClick();
    }

    const handleDelete = () => {
        // TODO
    }

    return (
        <>
            <ul className="list-group">
                {items.map((item, index) =>
                    <li className="list-group-item border rounded" key={index}>
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
