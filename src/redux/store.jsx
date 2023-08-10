import {configureStore} from "@reduxjs/toolkit"
import { initialReducers } from "./reducers"

export const store = configureStore({
    reducer :{initialReducers}
})




