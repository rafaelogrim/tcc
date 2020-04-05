import {HIDE, REQUEST_CHECK, REQUEST_END, REQUEST_REGISTER, SHOW} from "../constants/requests.constant";

export const makeRequests = (...actions) => async (dispatch) => {
    actions.forEach((e, i) => dispatch({type: REQUEST_REGISTER, payload: i}));
    actions.forEach((e, i) => e().finally(() => {
        dispatch({type: REQUEST_END, payload: i});
        dispatch({type: REQUEST_CHECK});
    }));
};

export const checkRequests = () => ({type: REQUEST_CHECK});

export const showLoad = () => ({type: SHOW});

export const hideLoad = () => ({type: HIDE});