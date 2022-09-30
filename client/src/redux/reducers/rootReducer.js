import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';
import employeesReducer from './employeesReducer';

const rootReducer = combineReducers({
  comps: companiesReducer,
  emps: employeesReducer,
});

export default rootReducer;
