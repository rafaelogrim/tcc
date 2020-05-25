import * as API from "../helper/API";
import {GET_PET_SUCCESS, GET_PETCOUNT_SUCCESS, PAGINATION_FILTER, PAGINATION_SET_PAGE} from "../constant/pet.constant";

// const pagePetLimit = 12;

export const getPetCount = () => async (dispatch) => {
    try {
        const {error, payload} = await API.get('/pet/count');
        if (error) console.log('erro');
        else dispatch({type: GET_PETCOUNT_SUCCESS, payload});
    } catch (e) {

    }
};

const getPets = async (dispatch, pagePetLimit, lastPetFilterPath, setPage, skip) => {
    const {error, payload} = await API.get(`/pet/filter?limit=${pagePetLimit}&skip=${skip || 0}&${lastPetFilterPath}`);
    if (error) console.log('erro', payload);
    else {
        console.log('voltou', payload);
        dispatch({type: PAGINATION_FILTER, payload: lastPetFilterPath});
        dispatch({type: PAGINATION_SET_PAGE, payload: setPage});
        dispatch({type: GET_PET_SUCCESS, payload});
    }
}

export const filter = (pagePetLimit, fields = {}, page = 0) => async (dispatch) => {
    try {

        const query = [];

        const gender = [];
        if (fields.gender_f) gender.push('f');
        if (fields.gender_m) gender.push('m');
        if (gender.length > 0) query.push('gender=' + gender.join(','))

        const age = [];
        if (fields.age_young) age.push('young');
        if (fields.age_adult) age.push('adult');
        if (age.length > 0) query.push('age=' + age.join(','))

        const size = [];
        if (fields.size_p) size.push('p');
        if (fields.size_m) size.push('m');
        if (fields.size_g) size.push('g');
        if (size.length > 0) query.push('size=' + size.join(','))

        await getPets(dispatch, pagePetLimit, query.join('&'), 0);

    } catch (e) {

    }
}

export const nextPage = (pagePetLimit, actualPage, lastPetFilterPath) => async (dispatch) => {
    try {
        await getPets(dispatch, pagePetLimit, lastPetFilterPath, actualPage + 1, (actualPage + 1) * pagePetLimit);
    } catch (e) {

    }
}

export const previousPage = (pagePetLimit,actualPage, lastPetFilterPath) => async (dispatch) => {
    try {
        await getPets(dispatch, pagePetLimit, lastPetFilterPath, actualPage - 1, (actualPage - 1) * pagePetLimit);
    } catch (e) {

    }
}

export const changePage = (pagePetLimit, page, lastPetFilterPath) => async (dispatch) => {
    try {
        await getPets(dispatch, pagePetLimit, lastPetFilterPath, page, page * pagePetLimit);
    } catch (e) {

    }
};

