import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import mainReducer from './slices/mainSlice';

const reducer = combineReducers({
    mainReducer,
})
export const store = configureStore({
    reducer
})
