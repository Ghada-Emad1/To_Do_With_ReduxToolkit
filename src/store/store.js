import { configureStore } from "@reduxjs/toolkit";

import filtersSlice from "../ReducerSlices/filtersSlice";
import todoSlice from "../ReducerSlices/todoSlice";

const store=configureStore({
    reducer:{
        filters:filtersSlice,
        todos:todoSlice
    }
})
export default store