export const getCompsAC = (payload) => ({ type: 'GET_COMP', payload });

export const getCompsThunk = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`/companies/${payload}`, { method: 'GET' });

    // Раскомментировать для запуска локально, а выше запрос закомменнтировать

    // const response = await fetch(`http://localhost:3001/companies/${payload}`, { method: 'GET' });

    if (response.status === 200) {
      console.log('fetching');
      const result = await response.json();
      dispatch(getCompsAC(result));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
