import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    
    async() => {
        axios.defaults.withCredentials = true // Permet de gérer la expresse-session et de renvoyer le cookie

        const request = await axios.get(`/auths/auth`);
        const response = await request.data
        
        return response;
    }

)

const initialState = {
    loading: false,
    user: null,
    error: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(checkAuth.pending,(state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(checkAuth.fulfilled,(state,action) => {
            state.loading = false;
            state.user = action.payload;
            console.log('action.payload', action.payload)
            state.error = null;
        })
        .addCase(checkAuth.rejected,(state,action) => {
            state.loading = false;
            state.user = null;
            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    },

    reducers: {
        getAuth: (state, action) => {
            state.user = action.payload
        }
    }

})
