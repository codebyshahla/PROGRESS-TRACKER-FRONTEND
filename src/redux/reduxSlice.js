  import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({

  name: "authToken",
  initialState:{
    token:null,
  }, 
  reducers:{
    setToken: (state,action)=>{
        state.token = action.payload
    }
  }

});

export const {setToken} = reduxSlice.actions
export const selectToken = (state) => state.authToken.token
export default reduxSlice.reducer
