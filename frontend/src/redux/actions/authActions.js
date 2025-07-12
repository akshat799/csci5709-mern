import { toast } from "react-toastify";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = (values) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
        const response = await fetch('https://csci5709-assignment2.onrender.com/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                password: values.password,
            }),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to sign up');
        }

        localStorage.setItem('token', data.token);
        toast.success('Signup successful! You can now log in.');

        dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
        return true;
    } catch (error) {
        dispatch({ type: SIGNUP_FAILURE, payload: error.message });
        toast.error(error.message);
        return false;
    }
}

export const login = (values) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const res = await fetch('https://csci5709-assignment2.onrender.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to log in');
        }

        localStorage.setItem('token', data.token);
        toast.success('Login successful!');

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
        return true;
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        toast.error(error.message);
        return false;
    }
}