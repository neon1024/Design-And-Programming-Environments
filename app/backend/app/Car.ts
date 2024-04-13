export default class Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _id: string

    constructor(brand: string, model: string, year: number) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._id = "" + brand + model + year;
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

    get id() {
        return this._id;
    }

    set id(newID: string) {
        this._id = newID;
    }
}