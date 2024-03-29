import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import AddPage from "../pages/AddPage.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage/>}></Route>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/home" element={<MainPage/>}></Route>
                <Route path="/add" element={<AddPage/>}></Route>
                <Route path="*" element={<MainPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}