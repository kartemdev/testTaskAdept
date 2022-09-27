import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';

const rootReducer = combineReducers({
  comps: companiesReducer,
});

export default rootReducer;
