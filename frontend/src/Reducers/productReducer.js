import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({

    //name Reducer
    name : "product",

    //name State
    initialState :[
        {
            id : 1,
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",
            name : "C",
            stockleft : 200,
            category : "Programming"
        },
        {
            id : 2,
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
            name : "C++",
            stockleft : 130,
            category : "Programming"
        },
        {
            id : 3,
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            name : "Python",
            stockleft : 100,
            category : "Programming"
        }


    ],
    // Action Reducer
    reducers :{
        insertData : (state,action) =>{
            state.name = action.payload.name 
            state.stockleft = action.payload.stockleft
            state.category =  action.payload.category
        }
    }
})


// export reducer

export default productReducer.reducer

// export Action Can use in reducer 

export const { insertData } =  productReducer.actions;