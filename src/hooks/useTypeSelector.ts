import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../store/rootReducer";

export const useTypeSelector: TypedUseSelectorHook<RootType> = useSelector
