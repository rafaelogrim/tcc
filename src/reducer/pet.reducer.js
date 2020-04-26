import {GET_PET_SUCCESS} from "../constant/pet.constant";

const initialState = {
    countPets: 0,
    carrousel: [],
};

const _GET_PET_SUCCESS = (state, {payload}) => {
    return {
        ...state,
        ...payload,
    };
};

const functions = {
    [GET_PET_SUCCESS]: _GET_PET_SUCCESS,
};

export const Pet = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
