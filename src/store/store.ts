import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducers/UserSlice'
import carReducer from './reducers/CarSlice'

const rootReducer = combineReducers({
    user: userReducer,
    car: carReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDistatch = AppStore['dispatch']
