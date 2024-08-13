import { createSlice } from "@reduxjs/toolkit";
import { FURNITURE } from "../Furniture";
const productSlice=createSlice({
    name:"search",
    initialState:{
        furniture:FURNITURE,
    },
    reducers:{
        searchProduct:(state,action)=>{
            if(action.payload=="")
            {
              state.furniture=FURNITURE;
            }
            else{
                state.furniture=FURNITURE.filter((furniture)=>{
                    return furniture.title.toLowerCase().includes(action.payload.toLowerCase());
                
                })
            }},
            searchcategory:(state,action)=>{
                if(action.payload=="All")
                {
                  state.furniture=FURNITURE;
                }
                else{
                    state.furniture=FURNITURE.filter((furniture)=>{
                        return furniture.title.toLowerCase().includes(action.payload.toLowerCase());
                    
                    })
                }},
        
        }
    
})

export const{searchProduct,searchcategory}=productSlice.actions;
export default productSlice.reducer