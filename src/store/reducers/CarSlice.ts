import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../utils/models/ICar";

interface CarState {
    cars: ICar[],
    isLoading: boolean,
    error: string
}

const initialState:CarState = {
    cars: [],
    isLoading: false,
    error: ''
}


export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        carsFetching(state) {
            state.isLoading = true
        },
        carsFetchingSuccess(state, action: PayloadAction<ICar[]>) {
            state.isLoading = false
            state.error = ''
            state.cars = action.payload
        },
        carsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})


export default carSlice.reducer
