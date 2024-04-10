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
            <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                border-start-0
                rounded-3
                m-2"
                    onClick={handleAddClick}>add</button>
            <List/>
        </>
    )
}
