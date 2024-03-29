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
    let index = 0;
    const length = window.localStorage.length;
    const items = [];

    while (index < length) {
        items.push(window.localStorage.getItem(index.toString()));
        index++;
    }

    return items;
}