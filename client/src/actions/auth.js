import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS} from './types';

export const loggo = (email, password) => async dispatch => {
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
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }

}