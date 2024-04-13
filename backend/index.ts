import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Car from "./Car.ts";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

const cars: Car[] = [];

app.get("/", (req: Request, res: Response) => {
  res.send("All good!");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

app.get("/api/cars", (req: Request, res: Response) => {
  res.status(200).send(cars);
});

// TODO validation
app.post("/api/cars", (req: Request, res: Response) => {
  const params: {
    brand: string,
    model: string,
    year: number
  } = req.body;

  const newCar: Car = new Car(params.brand, params.model, params.year);

  cars.push(newCar);

  res.sendStatus(201);
});

// TODO validation
app.put("/api/cars/:oldID", (req: Request, res: Response) => {
  const oldID: string = req.params.oldID.substring(1);

  const params: {
    brand: string,
    model: string,
    year: number
  } = req.body;

  const newCar: Car = new Car(params.brand, params.model, params.year);

  const index: number = cars.findIndex((car) => car.id == oldID);

  cars.splice(index, 1);

  cars.push(newCar);

  res.sendStatus(200);
});

// TODO validation
app.delete("/api/cars/:removalID", (req: Request, res: Response) => {
  const removalID = req.params.removalID;

  const index: number = cars.findIndex((car) => car.id == removalID);

  cars.splice(index, 1);

  res.sendStatus(200);
});

export default app;