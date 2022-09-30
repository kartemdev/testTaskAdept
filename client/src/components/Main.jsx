import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CompaniesAddModal from './Companies/CompaniesAddModal';
import CompaniesTable from './Companies/CompaniesTable';
import EmployeesAddModal from './Employees/EmployeesAddModal';
import EmployeesTable from './Employees/EmployeesTable';
import styles from './Main.module.css';

function Main() {
  const comps = useSelector((store) => store.comps);

  const [oneCheck, setOneCheck] = useState([]);

  useEffect(() => {
    let countCheck = [];

    comps.forEach((obj) => {
      if (obj.checked === true) {
        countCheck.push(obj);
      } else if (obj.id === oneCheck[0]?.id) {
        if (obj.checked === false) {
          countCheck = [];
        }
      }
    });

    if (countCheck.length === 1) {
      setOneCheck(countCheck);
    } else if (countCheck.length === 0) {
      setOneCheck([]);
    } else {
      setOneCheck([]);
    }
  }, [comps]);

  const upScrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="text-center mt-4">
      <button onClick={upScrollHandler} type="button" className={`${styles.upBut} btn btn-primary`}>↑</button>
      <h1 className="mb-5">Task Adept, Tables Service Companies & Employees</h1>
      <div className="d-flex justify-content-around">
        {oneCheck.length ? (
          <>
            <div className={`${styles.sizemodal} ${styles.divMain}`}>
              <CompaniesAddModal />
              <CompaniesTable />
            </div>
            <div className={`${styles.sizemodal}`}>
              <EmployeesAddModal />
              <EmployeesTable compId={oneCheck[0].id} />
            </div>
          </>
        )
          : (
            <div className={`${styles.sizemodal}`}>
              <CompaniesAddModal />
              <CompaniesTable />
            </div>
          )}
      </div>
    </div>
  );
}

export default Main;
