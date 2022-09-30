/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCheckedCompsAC, checkedCompsAC } from '../../redux/actions&thunks/comps/checkedCompsAction';
import { deleteCompsAC } from '../../redux/actions&thunks/comps/deleteCompsAction';
import { getCompsThunk } from '../../redux/actions&thunks/comps/getCompsAction';
import CompaniesEditModal from './CompaniesEditModal';
import styles from './CompaniesTable.module.css';

function CompaniesTable() {
  const comps = useSelector((store) => store.comps);
  const dispatch = useDispatch();

  const [editComp, setEditComp] = useState({});
  const [check, setCheck] = useState(false);

  const [currentLimit, setCurrentLimit] = useState(10);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(currentLimit + 1);

  useEffect(() => {
    fetch('http://localhost:3001/totalCount', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => setTotalCount(result.total));

    // Раскоментировать для запуска локально, а выше запрос закоменнтировать

      // fetch('http://localhost:3001/totalCount', { method: 'GET' })
      // .then((response) => response.json())
      // .then((result) => setTotalCount(result.total));

    if (fetching && currentLimit < totalCount + 10) {
      dispatch(getCompsThunk(currentLimit));
      setCurrentLimit((prev) => prev + 5);
      setFetching(false);
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - (
        e.target.documentElement.scrollTop + window.innerHeight) < 100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const setCompHandler = (obj) => {
    setEditComp(obj);
  };

  const checkChangeHandler1 = (obj) => {
    dispatch(checkedCompsAC(obj.id));
  };

  const allCheckChangeHandler = () => {
    dispatch(allCheckedCompsAC(check));
    setCheck(!check);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteCompsAC(comps.filter((obj) => obj.checked)));
  };

  return (
    <>
      <table className={`table table-bordered border-dark ${styles.sizemodal}`}>
        <thead className="sticky-top">
          <tr className="table-warning table-bordered border-dark">
            <th scope="col" className="d-flex flex-column">
              <input onChange={allCheckChangeHandler} type="checkbox" id="allCheckBox" checked={check} readOnly />
              <label htmlFor="allCheckBox">Всё</label>
              <button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
            </th>
            <th scope="col">Название компании</th>
            <th scope="col">Кол-во сотрудников</th>
            <th scope="col">Адрес компании</th>
          </tr>
        </thead>
        <tbody>
          {comps.map((obj) => (
            <tr className={`${styles.color}`} value={obj.checked} key={obj.id}>
              <td className="d-flex flex-column">
                <input onClick={() => checkChangeHandler1(obj)} type="checkbox" checked={obj.checked} readOnly />
                <button onClick={() => setCompHandler(obj)} type="button" className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  Изменить
                </button>
              </td>
              <td className="text-break">{obj.name}</td>
              <td className="text-break">{obj.countEmps}</td>
              <td className="text-break">{obj.adress}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CompaniesEditModal compObj={editComp} />
    </>
  );
}

export default CompaniesTable;
