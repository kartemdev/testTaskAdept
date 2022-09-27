/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkedCompsAC } from '../../redux/actions&thunks/comps/checkedCompsAction';
import { deleteCompsAC } from '../../redux/actions&thunks/comps/deleteCompsAction';

function CompaniesTable() {
  const comps = useSelector((store) => store.comps);
  const dispatch = useDispatch();

  const checkChangeHandler = (id) => {
    dispatch(checkedCompsAC(id));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteCompsAC(comps.filter((obj) => obj.checked)));
  };

  return (
    <table className="table-primary table-bordered w-50">
      <thead className="sticky-top">
        <tr>
          <th scope="col" className="d-flex flex-column">
            <input type="checkbox" id="allCheckBox" />
            <label htmlFor="allCheckBox">Выделить Всё</label>
            <button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
          </th>
          <th scope="col">Название компании</th>
          <th scope="col">Кол-во сотрудников</th>
          <th scope="col">Адрес компании</th>
        </tr>
      </thead>
      <tbody>
        {comps.map((obj) => (
          <tr>
            <th scope="row">
              <input onChange={() => checkChangeHandler(obj.id)} type="checkbox" checked={obj.checked} />
            </th>
            <td>{obj.name}</td>
            <td>{obj.countEmp}</td>
            <td>{obj.adress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompaniesTable;
