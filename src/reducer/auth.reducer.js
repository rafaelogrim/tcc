import {AUTH_MESSAGE, LOADING, LOGIN_SUCCESS} from "../constant/auth.constant";

const initialState = {
    paths: []
};

const _AUTH_MESSAGE = (state, {payload}) => ({
    ...state,
    authMessage: payload,
});

const _LOGIN_SUCCESS = () => ({loggedIn: true});

const _LOADING = (state, {payload}) => {
    const loading = payload === undefined || payload === true;
    return {
        ...state,
        loading,
        authMessage: loading ? null : state.authMessage,
    };
};

const functions = {
    [LOADING]: _LOADING,
    [AUTH_MESSAGE]: _AUTH_MESSAGE,
    [LOGIN_SUCCESS]: _LOGIN_SUCCESS,
};

export const Auth = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
