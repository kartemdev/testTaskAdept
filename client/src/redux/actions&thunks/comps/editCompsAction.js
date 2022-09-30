export const editCompsAC = (payload) => ({ type: 'EDIT_COMP', payload });

export const editCompsThunk = (payload) => async (dispatch) => {
  try {
    const response = await fetch('/companies/limit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    // Раскоментировать для запуска локально, а выше запрос закоменнтировать

    // const response = await fetch('http://localhost:3001/companies/limit', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload),
    // });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(editCompsAC(result));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
