import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {Auth} from "./auth.reducer";
import {Pet} from "./pet.reducer";

export default combineReducers({
    Pet,
    Auth,
    form
});
