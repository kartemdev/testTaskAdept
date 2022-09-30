export const editEmpsAC = (payload) => ({ type: 'EDIT_EMP', payload });

export const editEmpsThunk = (payload) => async (dispatch) => {
  try {
    const [empId, data] = payload;
    const response = await fetch(`/employees/${empId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    // Раскоментировать для запуска локально, а выше запрос закоменнтировать

    // const response = await fetch(`http://localhost:3001/employees/${empId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(editEmpsAC(result));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
