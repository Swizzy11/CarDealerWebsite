import axios from "axios";
import { AppDistatch } from "../store";
import { IUser } from "../../utils/models/IUser";
import { userSlice } from "./UserSlice";
import { ICar } from "../../utils/models/ICar";
import { carSlice } from "./CarSlice";
import { katalogDB } from "../../utils/db";

export const fetchUsers = () => async (dispatch: AppDistatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch(e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}

export const fethCars = () =>  (dispatch: AppDistatch) => {
    try {
        dispatch(carSlice.actions.carsFetching())
        const response:ICar[] = katalogDB
        setTimeout(() => {
            dispatch(carSlice.actions.carsFetchingSuccess(response))
        }, 500)
    } catch(e:any) {
        dispatch(carSlice.actions.carsFetchingError(e.message))
    }
}
