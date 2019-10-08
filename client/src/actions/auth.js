import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT} from './types';
import {setAlert} from './alert';


export const logout = () => async dispatch =>{
    dispatch({type:LOGOUT})
}



export const loggo = (email, password) => async dispatch => {
    console.log("loggo")
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        console.log(error)
        const errors = error.response.data.errors;
    
        if(errors){
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }

}

export const reggo = (email, password) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post('/api/user', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        const errors = error.response.data.errors;
    
        if(errors){
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }

}