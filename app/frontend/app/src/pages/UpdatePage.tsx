import {ChangeEvent, useState} from "react";
import Car from "../../../../Car.tsx";
import {useRemoveItem, useSetItem} from "../components/useLocalStorage.tsx";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function UpdatePage() {
    const [formData, setFormData] = useState({brand: "", model: "", year: 0})
    const add = useSetItem;
    const remove = useRemoveItem;
    const params = useParams();

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

    const handleUpdate = () => {
        const oldKey = params.id;
        remove(oldKey);

        const brand = formData.brand;
        const model = formData.model;
        const year = formData.year;

        const newKey = brand + model + year;
        add(newKey, new Car(brand, model, year));
        axios.put(`http://localhost:3000/api/cars/:${oldKey}`, {"brand": brand, "model": model, "year": year}).then(response => console.log(response)).catch(error => console.log(error));
    }

    return (
        <>
            <form className="position-absolute top-50 start-50 translate-middle">
                <input id="input-car-brand" name="brand" placeholder="brand" onChange={handleInputChange}/>
                <input id="input-car-model" name="model" placeholder="model" onChange={handleInputChange}/>
                <input id="input-car-year" name="year" placeholder="year" onChange={handleInputChange}/>
                <button className="
                border-3
                border-top-0
                border-end
                border-bottom
                rounded
                border-start-0" type="button" onClick={handleUpdate}>update
                </button>
            </form>
        </>
    );
}