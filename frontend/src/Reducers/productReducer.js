import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({

    //name Reducer
    name : "product",

    //name State
    initialState :[


    ],
    // Action Reducer
    reducers :{
        insertData : (state,action) =>{
            state.push(action.payload)
        },
        editDat : (state,action)=>{
            
        }
    }
})


// export reducer

export default productReducer.reducer

// export Action Can use in reducer 

export const { insertData } =  productReducer.actions;