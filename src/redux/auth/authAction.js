import { checkAuth } from './authSlice'
import { authSlice } from './authSlice'

export const checkAuthentication = checkAuth

export const { getAuth } = authSlice.actions;


// export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

