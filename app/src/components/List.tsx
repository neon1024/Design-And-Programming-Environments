import {useState} from "react"

function List() {
    const [items, setItems] = useState<string[]>([]);

    // TODO open a new web page with an add item menu
    // TODO update the list with the new item added
    const handleAdd = () => {
        const newItem = "" + items.length;

        setItems([...items, newItem])

        console.log("add");
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
                {items.map(item => <li className="list-group-item border rounded" key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default List;
