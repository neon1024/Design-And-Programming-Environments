import List from "../components/List.tsx";

export default function MainPage() {
    const handleAddClick = () => {
        window.open("/add", "_blank");
    }

    const handleReadClick = () => {
        window.open("/read", "_blank");
    }

    const handleUpdateClick = () => {
        window.open("/update", "_blank");
    }

    return (
        <>
            <button className="border rounded" onClick={handleAddClick}>add</button>
            <List
                onReadClick={handleReadClick}
                onUpdateClick={handleUpdateClick}
            />
        </>
    )
}
