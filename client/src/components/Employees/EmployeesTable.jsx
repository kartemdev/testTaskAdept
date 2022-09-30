/* eslint-disable max-len */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unCountEmpsAC } from '../../redux/actions&thunks/comps/countEmpsAction';
import { allCheckedEmpsAC, checkedEmpsAC } from '../../redux/actions&thunks/emps/checkedEmpsAction';
import { deleteEmpsAC } from '../../redux/actions&thunks/emps/deleteEmpsAction';
import { getEmpsThunk } from '../../redux/actions&thunks/emps/getEmpsAction';
import styles from './Employees.module.css';
import EmployeesEditModal from './EmployeesEditModal';

function EmployeesTable({ compId }) {
  const emps = useSelector((store) => store.emps);
  const dispatch = useDispatch();

  const [editEmp, setEditEmp] = useState({});
  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(getEmpsThunk(compId));
  }, []);

  const setEmpHandler = (obj) => {
    setEditEmp(obj);
  };

  const checkChangeHandler = (obj) => {
    dispatch(checkedEmpsAC(obj.id));
  };

  const allCheckChangeHandler = () => {
    dispatch(allCheckedEmpsAC(check));
    setCheck(!check);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteEmpsAC(emps.filter((obj) => obj.checked)));
    dispatch(unCountEmpsAC({ id: compId, emps: emps.filter((obj) => obj.checked) }));
  };

  return (
    <>
      <table className={`table table-bordered border-dark ${styles.sizemodal}`}>
        <thead className="sticky-top">
          <tr className="table-warning table-bordere border-dark">
            <th scope="col" className="d-flex flex-column">
              <input onClick={allCheckChangeHandler} type="checkbox" id="allCheckBox1" checked={check} readOnly />
              <label htmlFor="allCheckBox1">Всё</label>
              <button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
            </th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Должность</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((obj) => (
            <tr className={`${styles.color}`} value={obj.checked} key={obj.id}>
              <td className="d-flex flex-column">
                <input onClick={() => checkChangeHandler(obj)} type="checkbox" checked={obj.checked} readOnly />
                <button onClick={() => setEmpHandler(obj)} type="button" className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalEmp1">
                  Изменить
                </button>
              </td>
              <td className="text-break">{obj.firstName}</td>
              <td className="text-break">{obj.lastName}</td>
              <td className="text-break">{obj.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <EmployeesEditModal empObj={editEmp} />
    </>
  );
}

export default EmployeesTable;
