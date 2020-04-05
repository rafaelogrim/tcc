import {SHOW} from "../constant/auth.constant";

const initialState = {
    paths: []
};

const _SHOW = (state, {payload}) => ({
    ...state,
    ...payload,
});

const functions = {
    [SHOW]: _SHOW
};

export const Auth = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
