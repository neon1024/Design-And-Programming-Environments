// @ts-ignore
import express, { Request, Response } from "express"

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}.`));

interface Car {
    brand: string,
    model: string,
    year: number,
    color: string
}

const cars: Car[] = [];

const REQUIRED_NUMBER_OF_FIELDS = 4;

app.get("/", async(req: Request, res: Response) => {
    res.send("Home.");
});

app.get("/api/cars", async(req: Request, res: Response) => {
    const color = req.query["color"];

    if(color && typeof color === "string") {
        const filtered_cars = cars.filter((car) => car.color === color);

        return res.send(filtered_cars);
    }

    res.send(cars);
});

app.post("/api/cars", async(req: Request, res: Response) => {
    const number_of_fields = Object.keys(req.body).length;

    if(number_of_fields < REQUIRED_NUMBER_OF_FIELDS) {
        return res.status(400).send("[!] Invalid number of fields.");
    }

    cars.push(req.body);
    res.send(201);
});

// BMW
app.get("/api/BMW", (req: Request, res: Response) => {
	const cars_bmw = cars.filter((car) => car.brand == "BMW");
	res.send(cars_bmw);
});

app.post("/api/BMW", (req: Request, res: Response) => {
    const number_of_fields = Object.keys(req.body).length;

    if(number_of_fields < REQUIRED_NUMBER_OF_FIELDS) {
        res.send(400);
        return;
    }

	cars.push(req.body);
	res.send(200);
});

// Mercedes
app.get("/api/Mercedes", (req: Request, res: Response) => {
	const cars_mercedes = cars.filter((car) => car.brand == "Mercedes");
	res.send(cars_mercedes);
});

app.post("/api/Mercedes", (req: Request, res: Response) => {
    const number_of_fields = Object.keys(req.body).length;

    if(number_of_fields < REQUIRED_NUMBER_OF_FIELDS) {
        res.send(400);
        return;
    }

	cars.push(req.body);
	res.send(200);
});

// Porsche
app.get("/api/Porsche", (req: Request, res: Response) => {
	const cars_porsche = cars.filter((car) => car.brand == "Porsche");
	res.send(cars_porsche);
});

app.post("/api/Porsche", (req: Request, res: Response) => {
    const number_of_fields = Object.keys(req.body).length;

    if(number_of_fields < REQUIRED_NUMBER_OF_FIELDS) {
        res.send(400);
        return;
    }

	cars.push(req.body);
	res.send(200);
});

// McLaren
app.get("/api/McLaren", (req: Request, res: Response) => {
	const cars_mclaren = cars.filter((car) => car.brand == "McLaren");
	res.send(cars_mclaren);
});

app.post("/api/McLaren", (req: Request, res: Response) => {
    const number_of_fields = Object.keys(req.body).length;

    if(number_of_fields < REQUIRED_NUMBER_OF_FIELDS) {
        res.send(400);
        return;
    }

	cars.push(req.body);
	res.send(200);
});