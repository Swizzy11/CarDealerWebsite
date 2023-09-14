import axios from "axios";
import { AppDistatch } from "../store";
import { IUser } from "../../utils/models/IUser";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDistatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch(e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
