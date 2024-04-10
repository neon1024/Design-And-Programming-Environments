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

app.get("/", (req: Request, res: Response) => {
   res.send(200);
});

app.get("/message", (req: Request, res: Response) => {
   res.status(200).send("Welcome from the backend!");
});