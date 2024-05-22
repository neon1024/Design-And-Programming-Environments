import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import carService from "../utils/carService.js";

export default function HomePage() {
    return (
        <div className="HomePage">
            <h1>Car Dealership</h1> 
            <a href='cars'>View The Cars Available</a>
        </div>
    );
}