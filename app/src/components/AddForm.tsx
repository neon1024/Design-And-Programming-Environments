import Car from "./Car.tsx";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react"

interface Props {
    items: Car[];
    setItems: Dispatch<SetStateAction<Car[]>>;
}

export default function AddForm({props}: { props: Props }) {
    const [formData, setFormData] = useState({brand: "", model: "", year: 0})
    const items = props.items;
    const setItems = props.setItems;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData(currentData => {
            return {...currentData, [changedField]: newValue}
        })
    }

    const handleAdd = () => {
        setItems([...items, new Car(formData.brand, formData.model, formData.year)]);
        setFormData({brand: "", model: "", year: 0});
        console.log(items[items.length - 1].brand);
    }

    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <input id="input-car-brand" name="add-car-brand" placeholder="brand" value={formData.brand} onChange={handleInputChange}/>
            <input id="input-car-model" name="add-car-model" placeholder="model" value={formData.model} onChange={handleInputChange}/>
            <input id="input-car-year" name="add-car-year" placeholder="year" value={formData.year} onChange={handleInputChange}/>
            <button className="border rounded" type="button" onClick={handleAdd}>add
            </button>
        </form>
    );
}
