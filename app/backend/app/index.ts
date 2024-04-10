import {isNull} from "node:util";

const express = require("express");
import {Request, Response, urlencoded} from "express";
const cors = require("cors");
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => `Express Server running on PORT ${PORT}.`);

class Car {
    private _brand: string;
    private _model: string;
    private _year: number;

    constructor(brand: string, model: string, year: number) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand: string) {
        this._brand = newBrand;
    }

    get model() {
        return this._model;
    }

    set model(newModel: string) {
        this._model = newModel;
    }

    get year() {
        return this._year;
    }

    set year(newYear: number) {
        this._year = newYear;
    }
}

const cars: Car[] = [];

app.get("/", (req: Request, res: Response) => {
   res.status(200).send("Express + TypeScript App");
});

app.get("/api/cars", (req: Request, res: Response) => {
   res.status(200).send(cars);
});

app.post("/api/cars", (req: Request, res: Response) => {
   const car: Car = new Car(req.body["brand"], req.body["model"], req.body["year"]);
   console.log(car);

   if(Object.keys(car).length == 0) {
      return res.status(400).send("[!] Object is null.");
   }

   cars.push(car);

   res.send(201);
});

app.put("/api/cars/:oldKey",(req: Request, res: Response) => {
   const oldKey = req.params.oldKey.substring(1);

   const position = cars.findIndex((car) => "" + car.brand + car.model + car.year == oldKey);

   console.log(oldKey, position);

   if(position == -1) {
       return res.status(404).send("[!] Object not found.");
   }

   const newBrand = req.body["brand"];
   const newModel = req.body["model"];
   const newYear = parseInt(req.body["year"]);

   console.log(newBrand, newModel, newYear);

   cars[position].brand = newBrand;
   cars[position].model = newModel;
   cars[position].year = newYear;

   res.send(200);
});

app.patch("/api/cars", (req: Request, res: Response) => {
   // TODO
   res.send(200);
});

app.delete("/api/cars/:index", (req: Request, res: Response) => {
   const index = req.params.index.substring(1);

   const position = cars.findIndex((car: Car) => "" + car.brand + car.model + car.year == index);

   if(position == -1) {
      return res.status(404).send("[!] Object not found.");
   }

   cars.splice(position, 1);

   res.status(200).send(index);
});