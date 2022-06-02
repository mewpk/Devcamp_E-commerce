import { createSlice } from "@reduxjs/toolkit";


export const productReducer = createSlice({

    //name Reducer
    name : "product",
    //name State
    initialState :{
        data : []
    },
    // Action Reducer
    reducers :{
        initData : (state,action)=>{
            state.data = action.payload
        },

        insertData : (state,action) =>{
            state.data.push(action.payload)
            // console.log(action.payload);

            // console.log(state);
            // console.log(action.payload);
        },
        editDat : (state,action)=>{
            // state.data 
        },
        delData : (state,action)=>{
            
        }
    }
})


// export reducer

export default productReducer.reducer

// export Action Can use in reducer 

export const { insertData , initData } =  productReducer.actions;