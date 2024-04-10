import List from "../components/List.tsx";
import axios from "axios";

export default function MainPage() {
    window.addEventListener("storage", () => {
        window.location.reload();
    })

    const handleAddClick = () => {
        const message = axios.get("http://localhost:3000/message").then(response => response.data);
        console.log(message);
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
