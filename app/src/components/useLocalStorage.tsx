import Car from "./Car.tsx";

export default function useLocalStorage() {
    return {useSetItem, useGetItem, useRemoveItem, useGetItems};
}

export function useSetItem(key: unknown, value: unknown) {
    window.localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
}

export function useGetItem(key: unknown) {
    try {
        const value = window.localStorage.getItem(JSON.stringify(key));
        return value ? value : undefined;
    } catch (error) {
        console.log(error);
    }
}

export function useRemoveItem(key: unknown) {
    try {
        window.localStorage.removeItem(JSON.stringify(key));
    } catch (error) {
        console.log(error);
    }
}

export function useGetItems() {
    // TODO get all the keys, they are not numbers anymore, buy brand + model + year as string
    // TODO how to handle keys when there are random keys by plugins (ex: Coinbase)
    let index = 0;
    const length = window.localStorage.length - 1;
    const items = [];

    while (index < length) {
        const value: string | null = window.localStorage.getItem(index.toString());
        const parsedValue = JSON.parse(value || "{}");

        const brand = parsedValue["_brand"];
        const model = parsedValue["_model"];
        const year = parsedValue["_year"];

        items.push(new Car(brand, model, year));
        index++;
    }

    return items;
}