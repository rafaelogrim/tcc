import * as API from "../helper/API";
import {GET_PET_SUCCESS} from "../constant/pet.constant";

export const getPets = () => async (dispatch) => {
    try {

        const {error, payload} = await API.get('/pet');
        if (error) console.log('erro');
        else {
            dispatch({type: GET_PET_SUCCESS, payload});
        }
    } catch (e) {

    }
};
