import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CarAddForm.css";
import useCarStore from "../store/carStore";

export default function CarEditForm({cars, updateCar}) {
    const { id } = useParams();
    const navigateTo = useNavigate();

    const car = cars.find(car => car._id === id);
    //const car = useCarStore(state => state.cars.find(car => car._id === id));

    const [formData, setFormData] = useState({
        brand: car.brand,
        model: car.model,
        year: car.year,
        gearbox: car.gearbox,
        fuel: car.fuel,
        price: car.price,
        image: car.image
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
        e.preventDefault();
        await updateCar(car._id, formData);
        navigateTo(`/cars/details/${car._id}`);
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
            <a href={`/cars/details/${car._id}`}>Go Back</a>
        </>
    );
}
