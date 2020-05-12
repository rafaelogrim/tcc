import * as API from "../helper/API";
import {GET_PET_SUCCESS, GET_PETCOUNT_SUCCESS} from "../constant/pet.constant";

export const getPetCount = () => async (dispatch) => {
    try {
        const {error, payload} = await API.get('/pet/count');
        if (error) console.log('erro');
        else dispatch({type: GET_PETCOUNT_SUCCESS, payload});
    } catch (e) {

    }
};

export const filter = (fields = {}, page = 0) => async (dispatch) => {
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

        const {error, payload} = await API.get(`/pet/filter?limit=4&${query.join('&')}`);
        if (error) console.log('erro', payload);
        else {
            console.log('voltou', payload);
            dispatch({type: GET_PET_SUCCESS, payload});
        }
    } catch (e) {

    }
}

export const nextPage = () => {
    try {

    } catch (e) {

    }
}
