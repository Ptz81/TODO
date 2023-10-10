// import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from '@reduxjs/toolkit';


const initialState = {
    tasks: [
        { id: 0, text: "Write technical test", completed: true },
        { id: 1, text: "Write project", completed: true },
        { id: 2, text: "Meet with HR", completed: false },
        { id: 3, text: "Job discussion", completed: false },
        { id: 4, text: "Offer", completed: false },
    ],
    filters: { status: "all", },
};
const rootReducer = (state = initialState, action) => {
    return state;
};
const enhancer = devToolsEnhancer();
export const store = configureStore({ reducer: rootReducer }, enhancer);