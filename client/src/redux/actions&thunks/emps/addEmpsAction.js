import { countEmpsAC } from '../comps/countEmpsAction';

/* eslint-disable consistent-return */
export const addEmpsAC = (payload) => ({ type: 'ADD_EMP', payload });

export const addEmpsThunk = (payload) => async (dispatch) => {
  if (!payload[1].firstName || !payload[1].lastName || !payload[1].jobTitle) {
    return alert('Все поля необходимы для заполнения!');
  }
  try {
    const [compId, data] = payload;
    const response = await fetch(`/employees/${compId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    // Раскомментировать для запуска локально, а выше запрос закомменнтировать

    // const response = await fetch(`http://localhost:3001/employees/${compId}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(addEmpsAC(result));
      dispatch(countEmpsAC(compId));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
