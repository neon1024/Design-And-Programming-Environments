/*
* Custom Hook
*/

export default function useLocalStorage() {
    function setItem(key: unknown, value: unknown) {
        window.localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
    }

    function getItem(key: unknown) {
        try {
            const item = window.localStorage.getItem(JSON.stringify(key));
            return item ? JSON.parse(item) : undefined;
        } catch(error) {
            console.log(error)
        }
    }

    function removeItem(key: unknown,) {
        window.localStorage.removeItem(JSON.stringify(key))
    }

    function getItems() {
        const items = [];
        const keys = Object.keys(localStorage);
        let i: number = keys.length;

        while ( i-- ) {
        items.push( localStorage.getItem(keys[i]) );
    }

        return items;
    }

    return { setItem, getItem, removeItem, getItems }
}