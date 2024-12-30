// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "../redux/auth/authAction";

// import React, { useState } from 'react';


export function checkIfAuthenticated (navigate, dispatch) {

    // return "tititiit";
//    return  [count, setCount] = useState(0);

    // let navigate = useNavigate();
    // const dispatch = useDispatch();

    return dispatch(checkAuthentication())
        .then((result) => {
            if (!result.payload.authorized) {
                return navigate("/login");
            }
        })
        .catch((error) => {
            console.log("user", error);
        });
    
}
