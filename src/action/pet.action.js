import * as API from "../helper/API";

export const get = () => async (dispatch) => {
    try {

        const {error, payload} = await API.get('/pet');

    } catch (e) {

    }
};
