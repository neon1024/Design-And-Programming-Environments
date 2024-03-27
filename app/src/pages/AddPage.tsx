import AddForm from "../components/AddForm.tsx"
import Car from "../components/Car.tsx"
import {Dispatch, SetStateAction} from "react"

interface Props {
    items: Car[];
    setItems: Dispatch<SetStateAction<Car[]>>;
    addItem: (newItem: Car) => void;
}

export default function AddPage({props}: { props: Props }) {
    return (
        <>
            <AddForm addItem={props.addItem}/>
        </>
    )
}
