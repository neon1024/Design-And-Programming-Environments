import {useContext} from "react";
import Context from "./Context.tsx";

export default function AddForm() {
    const context = useContext(Context);
    const items = context.items;
    const setItems = context.setItems;

    const handleAdd = () => {
        const value: string = GetInputValue();

        setItems([...items, value]);
    }

    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <input id="add-input" name="add" placeholder="value"/>
            <button className="border rounded" type="button" onClick={handleAdd}>add</button>
        </form>
    );
}

function GetInputValue() {
    return (document.getElementById("add-input") as HTMLInputElement).value;
}
