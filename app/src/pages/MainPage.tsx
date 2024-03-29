import List from "../components/List.tsx";

export default function MainPage() {
    window.addEventListener("storage", () => {
        window.location.reload();
    })

    const handleAddClick = () => {
        window.open("/add", "_blank");
    }

    return (
        <>
            <button className="border rounded m-2" onClick={handleAddClick}>add</button>
            <List/>
        </>
    )
}
