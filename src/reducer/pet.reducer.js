import {GET_PET_SUCCESS, GET_PETCOUNT_SUCCESS} from "../constant/pet.constant";

const initialState = {
    pets: [],
    countPets: 0,
    carrousel: [],
    filterCount: 0,
    filterActivePage: 0,
};

const _GET_PET_SUCCESS = (state, {payload}) => ({
    ...state,
    pets: payload.documents,
    filterCount: payload.count,
    filterActivePage: 0,
})

const _GET_PETCOUNT_SUCCESS = (state, {payload}) => ({
    ...state,
    countPets: payload,
})

const functions = {
    [GET_PET_SUCCESS]: _GET_PET_SUCCESS,
    [GET_PETCOUNT_SUCCESS]: _GET_PETCOUNT_SUCCESS,
};

export const Pet = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
