import Car from "../../../../Car.tsx";
import {useGetItem, useGetItems, useRemoveItem} from "./useLocalStorage.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function List() {
    const items: Car[] = useGetItems();
    const remove = useRemoveItem;
    const get = useGetItem;
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/cars")
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleRead = (event, index) => {
        window.open("/read/" + index, "_blank");
    }

    const handleUpdate = (event, index) => {
        window.open("/update/" + index, "_blank");
    }

    const handleDelete = (event, index: string) => {
        remove(index);
        window.dispatchEvent(new Event("storage"));

        axios.delete(`http://localhost:3000/api/cars/:${index}`)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error)
            );
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
        selectedItems.forEach((selectedItem) => {
            remove(selectedItem);

            axios.delete(`http://localhost:3000/api/cars/:${selectedItem}`)
                .then(
                    (response) => console.log(response)
                )
                .catch(
                    (error) => console.log(error)
                );
        });

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
                    type="button" onClick={removeSelectedItems}>bulk delete
            </button>
            <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                border-start-0
                rounded-3
                m-2" type="button" onClick={exportSelectedItems}>export JSON
            </button>
            <ul className="list-group">
                {cars.length > 0 && (cars.map((car, index) =>
                    <li className="list-group-item border rounded d-flex justify-content-between" key={index}>
                        <span className="border rounded w-25 text-center">{car.model}</span>
                        <button className="
                            border-3
                            border-top-0
                            border-end
                            border-bottom
                            border-start-0
                            rounded-3" onClick={(event) => {
                            handleRead(event, car.id)
                        }}>read
                        </button>
                        <button className="
                            border-3
                            border-top-0
                            border-end
                            border-bottom
                            border-start-0
                            rounded-3" onClick={(event) => {
                            handleUpdate(event, car.id)
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
                                    handleDelete(event, car.id);
                                }}>delete
                        </button>
                        <input type="checkbox" checked={selectedItems.includes(car.id)} onChange={(event) => handleCheckbox(event, car.id)}/>
                    </li>))
                }
            </ul>
        </>
    )
}