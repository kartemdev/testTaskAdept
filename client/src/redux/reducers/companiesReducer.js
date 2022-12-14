/* eslint-disable consistent-return */
const companiesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_COMP':
    return action.payload.sort();
  case 'ADD_COMP':
    return [...state, action.payload];
  case 'EDIT_COMP':
    return state.map((obj) => (action.payload.id === obj.id ? action.payload : obj));
  case 'CHECK_COMP':
    return state.map((obj) => (
      obj.id === action.payload ? { ...obj, checked: !obj.checked } : obj
    ));
  case 'ALL_CHECK_COMP':
    if (action.payload === false) {
      return state.map((obj) => (obj.checked === false ? { ...obj, checked: true } : obj));
    } if (action.payload === true) {
      return state.map((obj) => (obj.checked === true ? { ...obj, checked: false } : obj));
    }
    break;
  case 'COUNT_EMPS':
    return state.map((obj) => (
      obj.id === action.payload ? { ...obj, countEmps: obj.countEmps + 1 } : obj
    ));
  case 'UN_COUNT_EMP':
    return state.map((obj) => (
      obj.id === action.payload.id
        ? { ...obj, countEmps: obj.countEmps - action.payload.emps.length } : obj
    ));
  case 'DELETE_COMP':
    return state.filter((obj) => obj.checked === false);
  default:
    return state;
  }
};

export default companiesReducer;
