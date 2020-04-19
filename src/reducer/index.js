import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {Auth} from "./auth.reducer";

export default combineReducers({
    Auth,
    form
});
