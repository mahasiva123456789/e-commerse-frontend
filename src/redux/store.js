import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./createSlice";
import productSlice from "./productSlice";
const store=configureStore({
    reducer:{
        cart:cartSlice,
        search:productSlice
    }
})
export default store