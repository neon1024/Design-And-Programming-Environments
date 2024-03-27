import Router from "./components/Router.tsx"
import {useState} from "react"
import Car from "./components/Car.tsx"

export default function App() {
    const [items, setItems] = useState<Car[]>([])

    function addItem(newItem: Car) {
        setItems([...items, newItem])
    }

    const props = {
        items: items,
        setItems: setItems,
        addItem: addItem
    }

    return (
        <>
            <Router props={props}/>
        </>
    )
}
