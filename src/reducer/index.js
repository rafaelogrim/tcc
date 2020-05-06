import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {reducer as modal} from 'redux-modal'
import {Auth} from "./auth.reducer";
import {Pet} from "./pet.reducer";

export default combineReducers({
    Pet,
    Auth,
    form,
    modal,
});
