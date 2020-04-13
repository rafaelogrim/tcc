import {SHOW} from "../constant/auth.constant";
import * as API from "../helper/API";

export const login = (form) => async (dispatch) => {
    try {
        const response = await API.login(form);
        console.log('opa', response);
    } catch (e) {
        console.log('cath', e);
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
