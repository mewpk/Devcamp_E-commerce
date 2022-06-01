import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({

    //name Reducer
    name : "product",

    //name State
    initialState :[],
    // Action Reducer
    reducers :{
        insertData : (state,action) =>{
            state.name = action.payload.name 
            state.stockleft = action.payload.stockleft
            state.category =  action.payload.category
        },
        editDat : (state,action)=>{
            
        }
    }
})


// export reducer

export default productReducer.reducer

// export Action Can use in reducer 

export const { insertData } =  productReducer.actions;