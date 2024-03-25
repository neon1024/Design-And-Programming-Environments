import {createContext, Dispatch, SetStateAction} from "react";

// data types for the Context items
interface ItemsContextType {
    items: string[];
    setItems: Dispatch<SetStateAction<string[]>>;
}

const Context = createContext<ItemsContextType>({
    items: [],
    setItems: () => {
    }
});

export default Context;
