import "../styles/CarItem.css"

export default function CarItem({car}) {

    return (
        <div className="CarItem">
            <img src={car.image} alt="Car Image" />
            <p>
                <span>{car.brand}</span>
                <span> </span>
                <span>{car.model}</span>
                <span> </span>
                <span>{car.year}</span>
            </p>
            <p>
                {car.gearbox}
            </p>
            <p>
                {car.fuel}
            </p>
            <p>
                Price: {car.price}€
            </p>
        </div>
    );
}