import Car from "./Car.tsx";
import {useGetItem, useGetItems, useRemoveItem} from "./useLocalStorage.tsx";
import {useState} from "react";

export default function List() {
    const items: Car[] = useGetItems();
    const remove = useRemoveItem;
    const get = useGetItem;
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleRead = (event, index) => {
        window.open("/read/" + index, "_blank");
    }

    // TODO update the list with the new item added
    const handleUpdate = (event, index) => {
        window.open("/update/" + index, "_blank");
    }

    // TODO delete the item using the index
    const handleDelete = (event, index) => {
        remove(index);
        window.dispatchEvent(new Event("storage"));
    }

    const handleCheckbox = (event, index) => {
        const isSelected = event.target.checked;

        if (isSelected) {
            setSelectedItems([...selectedItems, index]);
        } else {
            setSelectedItems((prevData) => {
                return prevData.filter((key) => {
                    return key != index;
                })
            })
        }
    }

    function removeSelectedItems() {
        selectedItems.forEach((selectedItem) => remove(selectedItem));

        setSelectedItems([]);

        window.dispatchEvent(new Event("storage"));
    }

    function exportSelectedItems() {
        let jsonString: string = "[";

        selectedItems.forEach((selectedItem) => {
            const value = get(selectedItem);
            jsonString += value;
            jsonString += ",\n";
        });

        jsonString = jsonString.slice(0, jsonString.length - 2);

        jsonString += "]";

        const blob = new Blob([jsonString], {type: "application/json"});

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "/";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return (
        <>
            <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                border-start-0
                rounded-3
                m-2"
                    type="button" onClick={removeSelectedItems}>delete</button>
            <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                border-start-0
                rounded-3
                m-2" type="button" onClick={exportSelectedItems}>export JSON</button>
            <ul className="list-group">
                {items.length > 0 && (items.map((item, index) =>
                    <li className="list-group-item border rounded d-flex justify-content-between" key={index}>
                        <span className="border rounded w-25 text-center">{item.model}</span>
                        <button className="
                            border-3
                            border-top-0
                            border-end
                            border-bottom
                            border-start-0
                            rounded-3" onClick={(event) => {
                            handleRead(event, item.brand + item.model + item.year)
                        }}>read
                        </button>
                        <button className="
                            border-3
                            border-top-0
                            border-end
                            border-bottom
                            border-start-0
                            rounded-3" onClick={(event) => {
                            handleUpdate(event, item.brand + item.model + item.year)
                        }}>update
                        </button>
                        <button className="
                                border-3
                                border-top-0
                                border-end
                                border-bottom
                                border-start-0
                                rounded-3"
                                onClick={(event) => {
                            handleDelete(event, item.brand + item.model + item.year)
                        }}>delete
                        </button>
                        <input type="checkbox" checked={selectedItems.includes(item.brand + item.model + item.year)} onChange={(event) => handleCheckbox(event, item.brand + item.model + item.year)}/>
                    </li>))
                }
            </ul>
        </>
    )
}