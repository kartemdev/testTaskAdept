export const getEmpsAC = (payload) => ({ type: 'GET_EMP', payload });

export const getEmpsThunk = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`/employees/${payload}`, { method: 'GET' });

    // Раскоментировать для запуска локально, а выше запрос закоменнтировать

    // const response = await fetch(`http://localhost:3001/employees/${payload}`, { method: 'GET' });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(getEmpsAC(result));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
