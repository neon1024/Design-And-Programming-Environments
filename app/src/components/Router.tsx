import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import AddPage from "../pages/AddPage.tsx";
import ReadPage from "../pages/ReadPage.tsx";
import UpdatePage from "../pages/UpdatePage.tsx";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}></Route>
                    <Route path="/home" element={<MainPage/>}></Route>
                    <Route path="/add" element={<AddPage/>}></Route>
                    <Route path="/read/:id" element={<ReadPage/>}></Route>
                    <Route path="/update/:id" element={<UpdatePage/>}></Route>
                    <Route path="*" element={<MainPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}