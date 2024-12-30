import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        axios.defaults.withCredentials = true // Permet de gérer la expresse-session et de renvoyer le cookie
        const request = await axios.post(`/auths/login`, userCredentials);
        const response = await request.data

        return response;
    }
)


const initialState = {
    loading: false,
    user: null,
    error: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(loginUser.pending,(state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state, action) =>{
            state.loading = false;
            console.log('action', action)
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected,(state, action) =>{
            state.loading = false;
            state.user = null;
            console.log(action.error.message)
            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }

})