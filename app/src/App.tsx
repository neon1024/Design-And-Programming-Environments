import Router from "./components/Router.tsx"
import Context from "./components/Context.tsx"
import {useState} from "react";

export default function App() {
    const [items, setItems] = useState<string[]>([])

    const data = {
        items,
        setItems
    }

    return (
        <>
            <Context.Provider value={data}>
                <Router/>
            </Context.Provider>
        </>
    )
}
