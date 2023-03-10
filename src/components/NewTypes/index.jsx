/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { CREATE_TYPE } from '../../constants/apiEndPoints';
import TypeShowButton from '../TypeShowButton';
import makeRequest from '../../utils/makeRequest';

import './NewTypes.css';

function NewTypes({ allTypes, setTypeSpecificId }) {
  // const [types, setTypes] = useState([1, 2, 3, 4]);
  const [showModal, setShowModal] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const [newType, setNewType] = useState('');

  const onChangeHandler = (e) => {
    setNewType(e.target.value);
  };

  const newTypeHandler = () => {
    setShowModal(!showModal);
  };

  const onModalSubmit = () => {
    makeRequest(CREATE_TYPE, {
      data: { name: newType },
    });

    setShowModal(false);
  };
  return (
    <div className="NewTypes">
      <div className="new-type-wrapper">
        <div className="new-type-button">
          {!showModal ? (
            <button className="trigger" type="button" onClick={newTypeHandler}>
              + New Type
            </button>
          ) : (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-heading">
                  <h2>Create New Type</h2>
                </div>
                <div className="modal-input">
                  <input
                    type="text"
                    value={newType}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="modal-button">
                  <button
                    className="modal-close"
                    type="button"
                    onClick={newTypeHandler}
                  >
                    close
                  </button>
                  <button
                    className="modal-submit"
                    type="button"
                    onClick={onModalSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="list-of-type-buttons">
          {allTypes.map((type, id) => {
            return (
              <TypeShowButton
                id={id}
                key={type.id}
                type={type}
                setTypeSpecificId={setTypeSpecificId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewTypes;
