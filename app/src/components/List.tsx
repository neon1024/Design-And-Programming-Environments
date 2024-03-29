import Car from "./Car.tsx";
import {useGetItems} from "./useLocalStorage.tsx";

export default function List() {
    const items: Car[] = useGetItems();

    const handleRead = () => {
        window.open("/read", "_blank");
    }

    // TODO update the list with the new item added
    const handleUpdate = () => {
        window.open("/update", "_blank");
    }

    // TODO delete the item using the index
    const handleDelete = (event) => {
        console.log(event.dataset.index);
    }

    return (
        <>
            <ul className="list-group">
                {items.length > 0 ? (items.map((item, index) =>
                    <li className="list-group-item border rounded" key={index}>
                        {item.year}
                        <button className="border rounded" onClick={handleRead}>read</button>
                        <button className="border rounded" onClick={handleUpdate}>update</button>
                        <button className="border rounded" onClick={handleDelete}>delete</button>
                    </li>)) : ""
                }
            </ul>
        </>
    )
}f