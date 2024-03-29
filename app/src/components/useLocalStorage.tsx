import Car from "./Car.tsx";

export default function useLocalStorage() {
    return {useSetItem, useGetItem, useRemoveItem, useGetItems};
}

export function useSetItem(key: unknown, value: unknown) {
    if (typeof key === "string") {
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        window.localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
    }
}

export function useGetItem(key: unknown) {
    try {
        let value;

        if (typeof key === "string") {
            value = window.localStorage.getItem(key);
        } else {
            value = window.localStorage.getItem(JSON.stringify(key));
        }
        
        return value ? value : undefined;
    } catch (error) {
        console.log(error);
    }
}

export function useRemoveItem(key: unknown) {
    try {
        if (typeof key === "string") {
            window.localStorage.removeItem(key);
        } else {
            window.localStorage.removeItem(JSON.stringify(key));
        }
    } catch (error) {
        console.log(error);
    }
}

export function useGetItems() {
    // TODO get all the keys, they are not numbers anymore, buy brand + model + year as string
    // TODO how to handle keys when there are random keys by plugins (ex: Coinbase)
    const items = [];
    const keys = Object.keys(window.localStorage);
    let index = 0;
    const length = keys.length;

    while (index < length) {
        console.log(keys[index]);

        const value: string | null = window.localStorage.getItem(keys[index]);

        const parsedValue = JSON.parse(value || "{}");

        console.log(value, parsedValue);

        const brand = parsedValue["_brand"];
        const model = parsedValue["_model"];
        const year = parsedValue["_year"];

        items.push(new Car(brand, model, year));

        index++;
    }

    return items;
}