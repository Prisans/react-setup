import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { couterReducer } from "./couterReducer";

export const rootReducer = combineReducers({
    todo : todoReducer,
    counter : couterReducer
})