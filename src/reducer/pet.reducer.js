import {GET_PET_SUCCESS, GET_PETCOUNT_SUCCESS, PAGINATION_FILTER, PAGINATION_SET_PAGE} from "../constant/pet.constant";

const initialState = {
    pets: [],
    countPets: 0,
    carrousel: [],
    filterCount: 0,
    pagePetLimit: 12,
    lastPetFilterPath: null,
    paginationActualPage: 0,
};

const _GET_PET_SUCCESS = (state, {payload}) => ({
    ...state,
    pets: payload.documents,
    filterCount: payload.count,
})

const _GET_PETCOUNT_SUCCESS = (state, {payload}) => ({
    ...state,
    countPets: payload,
});

const _PAGINATION_FILTER = (state, {payload}) => ({
    ...state,
    lastPetFilterPath: payload,
});

const _PAGINATION_SET_PAGE = (state, {payload}) => ({
    ...state,
    paginationActualPage: payload,
});

const functions = {
    [GET_PET_SUCCESS]: _GET_PET_SUCCESS,
    [GET_PETCOUNT_SUCCESS]: _GET_PETCOUNT_SUCCESS,
    [PAGINATION_FILTER]: _PAGINATION_FILTER,
    [PAGINATION_SET_PAGE]: _PAGINATION_SET_PAGE,
};

export const Pet = (state = initialState, action) => !functions[action.type] ? state : functions[action.type](state, action);
