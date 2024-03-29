import {useParams} from "react-router-dom";
import {useGetItem} from "../components/useLocalStorage.tsx";

export default function ReadPage() {
    const params = useParams();
    const parsedValue = JSON.parse(useGetItem(params.id) || "{}");
    const item = {"_brand": parsedValue["_brand"], "_model": parsedValue["_model"], "_year": parsedValue["_year"]}

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle border rounded p-5 d-block w-50">
                <div className="d-flex justify-content-evenly">
                    <h3>Brand:</h3><span className="fs-4">{item._brand}</span>
                </div>
                <div className="d-flex justify-content-evenly">
                    <h3>Model:</h3><span className="fs-4">{item._model}</span>
                </div>
                <div className="d-flex justify-content-evenly">
                    <h3>Year:</h3><span className="fs-4">{item._year}</span>
                </div>
            </div>
        </>
    );
}