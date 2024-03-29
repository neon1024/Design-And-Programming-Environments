import useLocalStorage from "../components/useLocalStorage.tsx";

export default function MainPage() {
    const {setItem, getItem, removeItem, getItems} = useLocalStorage();
    const items: string[] = getItems();

    window.addEventListener("storage", (event) => {
        window.location.reload();
    });

    const handleAdd = () => {
        window.open("/add");
    }

    return (
        <>
            <button className="border round" type="button" onClick={handleAdd}>add</button>
            <ul className="list-group border rounded">
                {items.map((item, index) =>
                    <li className="list-group-item border rounded" key={index}>{item}</li>
                )}
            </ul>
        </>
    )
}