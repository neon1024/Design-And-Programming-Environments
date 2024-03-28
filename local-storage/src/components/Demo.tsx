import {ChangeEvent, useState} from "react";
import useLocalStorage from "./useLocalStorage.ts";

export default function Demo() {
    const [value, setValue] = useState("");
    const { setItem, getItem, removeItem, getItems } = useLocalStorage();
    const [result, setResult] = useState("")
    let index = 0;

    const items: string[] = getItems();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    const handleSet = () => {
        index = index + 1;
        setItem(index, value);
        setResult("added " + value)
        console.log(items);
    }

    return (
        <>
            <form>
                <input type="text" placeholder="..." value={value} onChange={handleInputChange}/>
            </form>
            <div>{value}</div>
            <button type="button" onClick={handleSet}>SET</button>
            <button>GET</button>
            <button>REMOVE</button>
            <div>{result}</div>
        </>
    )
}