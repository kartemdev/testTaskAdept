/* eslint-disable consistent-return */
const employeesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_EMP':
    return action.payload.sort();
  case 'ADD_EMP':
    return [...state, action.payload];
  case 'EDIT_EMP':
    return state.map((obj) => (action.payload.id === obj.id ? action.payload : obj));
  case 'CHECK_EMP':
    return state.map((obj) => (
      obj.id === action.payload ? { ...obj, checked: !obj.checked } : obj
    ));
  case 'ALL_CHECK_EMP':
    if (action.payload === false) {
      return state.map((obj) => (obj.checked === false ? { ...obj, checked: true } : obj));
    } if (action.payload === true) {
      return state.map((obj) => (obj.checked === true ? { ...obj, checked: false } : obj));
    }
    break;
  case 'DELETE_EMP':
    return state.filter((obj) => obj.checked === false);
  default:
    return state;
  }
};

export default employeesReducer;
