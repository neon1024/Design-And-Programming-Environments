import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CarAddForm.css";

export default function CarAddForm({addCar}) {
    const navigateTo = useNavigate();
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: "",
        fuel: "",
        gearbox: "",
        price: 0,
        image: ""
    });

    const handleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;

        setFormData(currentData => {
            return {
                ...currentData,
                [changedField]:newValue
            }
        });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await addCar(formData);
            navigateTo("/cars");
        } catch (error) {
            console.log(error.message);
        }
        
    }

    return (
        <>
            <form className="CarAddForm" onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand</label>
                <input type="text" placeholder="brand" value={formData.brand} onChange={handleChange} name="brand"/>

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="model" value={formData.model} onChange={handleChange} name="model"/>

                <label htmlFor="year">Year</label>
                <input type="text" placeholder="year" value={formData.year} onChange={handleChange} name="year"/>

                <label htmlFor="gearbox">Gearbox</label>
                <input type="text" placeholder="gearbox" value={formData.gearbox} onChange={handleChange} name="gearbox"/>

                <label htmlFor="fuel">Fuel</label>
                <input type="text" placeholder="fuel" value={formData.fuel} onChange={handleChange} name="fuel"/>

                <label htmlFor="price">Price</label>
                <input type="text" placeholder="price" value={formData.price} onChange={handleChange} name="price"/>

                <label htmlFor="image">Image URL</label>
                <input type="text" placeholder="image" value={formData.image} onChange={handleChange} name="image"/>

                <button type="submit">Submit</button>
            </form>
            <a href="/cars">Go Back</a>
        </>
    );
}