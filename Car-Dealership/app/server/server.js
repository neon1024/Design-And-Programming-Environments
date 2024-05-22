if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ExpressError = require('./utils/ExpressError.js');
const cookieParser = require('cookie-parser');

const app = express();
const carRoutes = require('./routes/carRoutes.js');

const CronJob = require("cron").CronJob;

PORT = 3000;
origins = ["http://localhost:8080", "http://localhost:8800", "http://localhost:5173"];

const socket = require("socket.io")(PORT, {
    cors: {
        origin:
            origins
    }
});

socket.on("connection", (client) => {
    console.log(`[+] Client connected with id: ${client.id}`);

    const job = new CronJob("*/10 * * * * *", () => {
        const car = {brand: "BMW", model: "M4 F82", year: 2020, fuel: "petrol", gearbox: "automatic", price: 45000, image: "https://s3mag.com/wp-content/uploads/2022/10/new-BMW-M2-5-1280x640.jpg"};
        client.emit("receive-car", car);
    });

    job.start();
})

const dbUrl = 'mongodb://127.0.0.1:27017/cars';
const dbTestUrl = 'mongodb://127.0.0.1:27017/cars-test';

const url = process.env.NODE_ENV === 'test' ? dbTestUrl : dbUrl;

//deployment
const dbClusterUrl = process.env.DB_URL;

mongoose.connect(url)
.then(() => {
    console.log(`Mongo connection open ${url}`);
})
.catch(err => {
    console.log('[!] Mongo connection ERROR');
    console.log(err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/cars', carRoutes);

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.all('*', (req, res, next) => {
    next(new ExpressError('[!] Page not found', 404));
});

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if (!err.message) {
        err.message = '[!] Something went wrong';
    }
    res.status(statusCode).send(err.message);
})

app.listen(8800, () => {
    console.log("Listening on port 8800");
});

module.exports = app;