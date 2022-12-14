import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompThunk } from '../../redux/actions&thunks/comps/addCompsAction';

function CompaniesAddModal() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    adress: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCompThunk(input));
    setInput({
      name: '',
      adress: '',
    });
  };

  return (
    <>
      <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Добавить компанию
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Форма добавления компании</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit={submitHandler}>
              <div className="modal-body d-flex flex-column">
                <input onChange={changeHandler} type="text" placeholder="Именование компании" className="mb-1" name="name" value={input.name} />
                <input onChange={changeHandler} type="text" placeholder="Адрес компании" name="adress" value={input.adress} />
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

export default CompaniesAddModal;
