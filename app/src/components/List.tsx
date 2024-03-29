import Car from "./Car.tsx";
import {useGetItems, useRemoveItem} from "./useLocalStorage.tsx";

export default function List() {
    const items: Car[] = useGetItems();
    const remove = useRemoveItem;

    const handleRead = (event, index) => {
        window.open("/read", "_blank");
    }

    // TODO update the list with the new item added
    const handleUpdate = (event, index) => {
        window.open("/update", "_blank");
    }

    // TODO delete the item using the index
    const handleDelete = (event, index) => {
        remove(index);
        window.dispatchEvent(new Event("storage"));
    }

    return (
        <>
            <ul className="list-group">
                {items.length > 0 && (items.map((item, index) =>
                    <li className="list-group-item border rounded d-flex justify-content-between" key={index}>
                        <span className="border rounded w-25 text-center">{item.model}</span>
                        <button className="border rounded" onClick={(event) => {
                            handleRead(event, item.brand + item.model + item.year)
                        }}>read
                        </button>
                        <button className="border rounded" onClick={(event) => {
                            handleUpdate(event, item.brand + item.model + item.year)
                        }}>update
                        </button>
                        <button className="border rounded" onClick={(event) => {
                            handleDelete(event, item.brand + item.model + item.year)
                        }}>delete
                        </button>
                    </li>))
                }
            </ul>
        </>
    )
}