import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useCarStore from './store/carStore';
import axios from 'axios';
import * as db from './db/db.js';
import Dexie from 'dexie';

import HomePage from './pages/HomePage.jsx';

import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import CarAddForm from './components/CarAddForm';
import CarEditForm from './components/CarEditForm';
import carService from "./utils/carService.js";

import { io } from "socket.io-client";

export default function App() {
    const [cars, setCars] = useState([]);
    const [backendDown, setBackendDown] = useState(true);
    const [sort, setSort] = useState('ascending');
    //const cars = useCarStore(state => state.cars); 
    //const setCars = useCarStore(state => state.setCars);

    //infinite scroll
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    //const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const socket = io("http://localhost:3000");

        socket.on("receive-message-from-server", (message) => {
            console.log(message);
        })

        socket.on("receive-car", async (car) => {
            console.log(car);
            await addCar(car);
        })
    }, []);

    window.addEventListener("storage", () => {
            window.location.reload();
    });

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollY + windowHeight >= documentHeight - 100) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage]);

        useEffect(() => {
        const fetchCars = async () => {
            try {
                const fetchedCars = await carService.getAllCars(currentPage, itemsPerPage, sort);
                setCars([...cars, ...fetchedCars]);
                setBackendDown(false);
            } catch (error) {
                console.error('Error fetching cars', error);
                if (error.code === 'ERR_NETWORK') {
                    setBackendDown(true);
                    const locallySavedCars = await db.getAllLocallySavedCars();
                    console.log(locallySavedCars);
                    setCars(locallySavedCars);
                    alert("[!] Server is down.");
                }
            }
        }
        fetchCars();
    }, []);

    useEffect(() => {
        const syncData = async () => {
            const databaseExists = await Dexie.exists('offlineDB');
            if (backendDown === false && databaseExists) {
                await db.syncDataWithBackend();
                await db.clearOfflineDb();
            }
        }
        syncData();
    }, [backendDown])

    const addCar = async (car) => {
        try {
            const newCar = await carService.addCar(car);
            setCars(prevCars => [...prevCars, newCar]);
            setBackendDown(false);
        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                console.log('[!] Error adding car. Adding locally.');
                setBackendDown(true);
                db.saveCarLocally(car, 'POST');
                dispatchEvent(new Event("storage"));
            }
        }
    }

    const updateCar = async (id, updatedCar) => {
        try {
            await carService.updateCar(id, updatedCar);
            setBackendDown(false);
        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                console.log('[!] Error updating car. Updating locally.');
                setBackendDown(true);
                await db.saveCarLocally({...updatedCar, _id: id}, 'PUT');
            }
        }
    }

    const removeCar = async (id) => {
        try {
            await carService.deleteCar(id);
            setCars(prevCars => prevCars.filter(car => car._id !== id));
            setBackendDown(false);
        } catch (error) {
            console.error('Error removing car', error);
            setBackendDown(true);
        }
    };

    const sortCars = () => {
        // const sortedCars = [...cars];
        // sortedCars.sort((a, b) => {
        //     const makeA = a.make.toLowerCase();
        //     const makeB = b.make.toLowerCase();
        //     if (makeA < makeB) return -1;
        //     if (makeA > makeB) return 1;
        //     return 0;
        // });
        // setCars(sortedCars);
        if (sort === 'ascending') {
            setSort('descending');
        } else {
            setSort('ascending');
        }
        const fetchSortedCars = async () => {
            const sortedCars = await carService.getAllCars(currentPage, itemsPerPage, sort);
            setCars(sortedCars);
        }
        fetchSortedCars();
    }

    const deleteSelected = (selectedCars) => {
        selectedCars.forEach(async (id) => {
            await removeCar(id);
        });
        setCars(prevCars => prevCars.filter(car => !selectedCars.includes(car._id)));
    }

    return (
        <Router>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/cars' element={<CarList cars={cars} sortCars={sortCars} deleteSelected={deleteSelected}/>}/>
                    <Route path='/cars/details/:id' element={<CarDetails removeCar={removeCar}/>}/>
                    <Route path='/cars/edit/:id' element={<CarEditForm cars={cars} updateCar={updateCar}/>}/>
                    <Route path='/cars/add' element={<CarAddForm addCar={addCar}/>}/>
                </Routes>
            </div>
        </Router>
    );
}
