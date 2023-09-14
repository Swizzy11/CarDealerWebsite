import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDistatch, RootState } from "../../store/store";
import { useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDistatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
