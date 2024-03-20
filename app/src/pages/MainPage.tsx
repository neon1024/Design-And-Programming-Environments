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
            <List
                onAddClick={handleAddClick}
                onReadClick={handleReadClick}
                onUpdateClick={handleUpdateClick}
            />
        </>
    )
}
