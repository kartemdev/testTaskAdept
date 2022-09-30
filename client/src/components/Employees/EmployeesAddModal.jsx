import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmpsThunk } from '../../redux/actions&thunks/emps/addEmpsAction';

function EmployeesAddModal({ compId }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addEmpsThunk([compId, input]));
    setInput({
      firstName: '',
      lastName: '',
      jobTitle: '',
    });
  };

  return (
    <>
      <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalEmp">
        Добавить сотрудника
      </button>

      <div className="modal fade" id="exampleModalEmp" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Форма добавления сотрудника</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit={submitHandler}>
              <div className="modal-body d-flex flex-column">
                <input onChange={changeHandler} type="text" placeholder="Имя" className="mb-1" name="firstName" value={input.firstName} />
                <input onChange={changeHandler} type="text" placeholder="Фамилия" className="mb-1" name="lastName" value={input.lastName} />
                <input onChange={changeHandler} type="text" placeholder="Должность" name="jobTitle" value={input.jobTitle} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeesAddModal;
