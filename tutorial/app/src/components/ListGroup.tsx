function ListGroup() {
    const items = ["Ioan", "Teo", "Alex"];

    return (
        <>
        <h1>List</h1>
            { items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                { items.map(item =>
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={() => LogItem(item)}
                    >
                        {item}
                    </li>)
                }
            </ul>
        </>
    )
}

function LogItem(item: string) {
    console.log(item)
}

export default ListGroup;
