import {AUTH_MESSAGE, LOGIN_SUCCESS, SHOW, LOADING} from "../constant/auth.constant";
import * as API from "../helper/API";

export const login = (form) => async (dispatch) => {
    try {
        dispatch({type: LOADING});
        const {error, payload} = await API.login(form);
        if (error) {
            dispatch({type: AUTH_MESSAGE, payload: payload.message});
            dispatch({type: LOADING, payload: false});
        } else dispatch({type: LOGIN_SUCCESS});
    } catch (e) {
        dispatch({type: AUTH_MESSAGE, payload: 'Falha ao realizar login'});
        dispatch({type: LOADING, payload: false});
    }
};

export const checkAuth = (path) => async (dispatch) => {
    console.log('>> auth.action', path);
    dispatch({type: SHOW});
    // try {
    const {payload} = await API.isAuthenticated();
    console.log('>>payload>>', payload);
    return {};
    // dispatch({type: SAVE, payload});
    // if (path) {
    //     const authorized = payload.paths.find((e) => e.path === path);
    //     if (!authorized) {
    //         window.location.href = `/404`;
    //         return false
    //     }
    // }
    // return payload
    // } catch (e) {
    //     // if (path) window.location.href = `/login?redirect=${path}`;
    //     throw e;
    // }
};
