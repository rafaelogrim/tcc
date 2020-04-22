import {GET_PET_SUCCESS} from "../constant/pet.constant";

const initialState = {
    pets: [],
};

const _GET_PET_SUCCESS = (state, {payload}) => {
    return {
        ...state,
        pets: payload,
    };
};

const functions = {
    [GET_PET_SUCCESS]: _GET_PET_SUCCESS,
};

export const Pet = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
