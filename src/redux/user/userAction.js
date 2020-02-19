import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType"
import Axios from "axios"

 const fetchUserRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}
 const fetchUserSuccess = user=>{
        return {
            type:FETCH_USER_SUCCESS,
            payload:user
        }
}   

 const fetchUserFailure = error=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser = ()=>{
    return (dispatch)=>{
            dispatch(fetchUserRequest);
            Axios.get("https://jsonplaceholder.typicode.com/users")
            .then( response=>{
                    const user = response.data;
                    dispatch(fetchUserSuccess(user))
            })
            .catch((err)=>{
                const error = err.message;
                dispatch(fetchUserFailure((error)))
            })
    }
}