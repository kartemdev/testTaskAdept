/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
const companiesReducer = (state = [
  {
    id: 1, name: 'Gora', countEmp: '3', adress: 'Moscow, low streer, 5', checked: false
  },
  {
    id: 2, name: 'Dayz', countEmp: '5', adress: 'Moscow, york streer, 5', checked: false
  },
  {
    id: 3, name: 'Hosha', countEmp: '2', adress: 'Moscow, piter streer, 5', checked: false
  },
  {
    id: 4, name: 'Gora', countEmp: '3', adress: 'Moscow, low streer, 5', checked: false
  },
], action) => {
  switch (action.type) {
  case 'ADD_COMP':
    return [...state, action.payload];
  case 'CHECK_COMP':
    return state.map((obj) => (
      obj.id === action.payload ? { ...obj, checked: !obj.checked } : obj
    ));
  case 'DELETE_COMP':
    return state.filter((obj) => obj.checked === false);
  default:
    return state;
  }
};

export default companiesReducer;
