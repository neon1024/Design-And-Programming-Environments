import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import AddPage from "../pages/AddPage.tsx";
import ReadPage from "../pages/ReadPage.tsx";
import UpdatePage from "../pages/UpdatePage.tsx";
import Car from "../components/Car.tsx"
import {Dispatch, SetStateAction} from "react"

interface Props {
    items: Car[],
    setItems: Dispatch<SetStateAction<Car[]>>;
    addItem: (newItem: Car) => void;
}

export default function Router({props}: { props: Props }) {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage props={props}/>}></Route>
                    <Route path="/home" element={<MainPage props={props}/>}></Route>
                    <Route path="/add" element={<AddPage props={props}/>}></Route>
                    <Route path="/read" element={<ReadPage props={props}/>}></Route>
                    <Route path="/update" element={<UpdatePage props={props}/>}></Route>
                    <Route path="*" element={<MainPage props={props}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
