import { createContext } from "react"

const initialState = {
    first: "Macharia",
    second: "Marigi",
}

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
