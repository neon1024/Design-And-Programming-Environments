import {ChangeEvent, useState} from "react";
import useLocalStorage from "./useLocalStorage.tsx";

export default function AddForm() {
    const [inputValue, setInputValue] = useState("");
    const {setItem, getItem, removeItem, getItems} = useLocalStorage();
    const items: string[] = getItems();

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleAdd = () => {
        const index = items.length;

        setItem(index, inputValue);
        console.log(index);
    }

    return (
        <>
            <form className="border rounded">
                <input name="input" placeholder="..." onChange={onInputChange}/>
                <button className="border rounded" type="button" onClick={handleAdd}>add</button>
            </form>
        </>
    )
}