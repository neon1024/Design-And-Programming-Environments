export default class Car {
    private __brand: string;
    private __model: string;
    private __year: number;

    constructor(brand: string, model: string, year: number) {
        this.__brand = brand;
        this.__model = model;
        this.__year = year;
    }

    get brand() {
        return this.__brand;
    }

    set brand(newBrand: string) {
        this.__brand = newBrand;
    }

    get model() {
        return this.__model;
    }

    set model(newModel: string) {
        this.__model = newModel;
    }

    get year() {
        return this.__year;
    }

    set year(newYear: number) {
        this.__year = newYear;
    }
}
