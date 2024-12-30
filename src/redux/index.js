import { configureStore } from "@reduxjs/toolkit";
import  { counterSlice }  from './counter/counterSlice'
import { userSlice } from './user/userSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})