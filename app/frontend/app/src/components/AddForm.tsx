import Car from "./Car.tsx";
import {ChangeEvent, useState} from "react";
import {useSetItem} from "./useLocalStorage.tsx";

export default function AddForm() {
    const [formData, setFormData] = useState({brand: "", model: "", year: 0})
    const add = useSetItem;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData(
            {
                ...formData,
                [changedField]: newValue
            }
        )
    }

    const handleAdd = () => {
        const key = formData["brand"] + formData["model"] + formData["year"];
        add(key, new Car(formData.brand, formData.model, formData.year));
    }

    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <input id="input-car-brand" name="brand" placeholder="brand" onChange={handleInputChange}/>
            <input id="input-car-model" name="model" placeholder="model" onChange={handleInputChange}/>
            <input id="input-car-year" name="year" placeholder="year" onChange={handleInputChange}/>
            <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                border-start-0
                rounded-3
            " type="button" onClick={handleAdd}>add
            </button>
        </form>
    );
}