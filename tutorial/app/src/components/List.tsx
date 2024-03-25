import {useState} from "react";

export default function List() {
    const [items, setItems] = useState<string[]>([]);

    const handleAdd = (newItem: string) => {
        setItems([...items, newItem])
    }

    return (
        <>
            <div className="d-flex">
                <button className="border rounded" type="button" onClick={}>add</button>
                <ul className="list-group">
                    {items.map((item, index) =>
                        <li className="list-group-item border rounded" key={index}>{item}</li>
                    )}
                </ul>
            </div>
        </>
    )
}
