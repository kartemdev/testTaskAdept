/* eslint-disable consistent-return */
export const addCompsAC = (payload) => ({ type: 'ADD_COMP', payload });

export const addCompThunk = (payload) => async (dispatch) => {
  if (!payload.name || !payload.adress) {
    return alert('Все поля необходимы для заполнения!');
  }
  try {
    const response = await fetch('/companies/limit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    // Раскоментировать для запуска локально, а выше запрос закоменнтировать

    // const response = await fetch('http://localhost:3001/companies/limit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload),
    // });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(addCompsAC(result));
    }
  } catch (error) {
    console.log(error);
  }
};
