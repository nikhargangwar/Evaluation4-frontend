/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ADD_FIELD, GET_FIELDS_BY_ID } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
// import MainBody from '../../components/MainBody';
import Field from '../Field';

import './TypeFields.css';

function TypeFields({ typeSpecificId }) {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState();
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('');
  const [dummyState, setDummyState] = useState(true);
  console.log(typeSpecificId);
  useEffect(() => {
    makeRequest(GET_FIELDS_BY_ID, {
      data: { typeId: typeSpecificId },
    })
      .then((response) => {
        console.log(response.data);
        setFields(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [typeSpecificId, dummyState]);

  const addFiledButtonHandler = () => {
    makeRequest(ADD_FIELD, {
      data: {
        fieldName,
        fieldType,
        typeId: typeSpecificId,
      },
    })
      .then((response) => {
        console.log(response.data);
        setDummyState(!dummyState);
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div className="TypeFields">
      <div className="field-header">
        <h1>Company Profile</h1>
      </div>
      <div className="field-button">
        <button type="button" onClick={addFiledButtonHandler}>
          Add Another Field
        </button>
      </div>
      <div className="field-input-section">
        <div className="left-design">
          <h3>Ab</h3>
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setFieldName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Type"
            onChange={(e) => setFieldType(e.target.value)}
          />
        </div>
      </div>
      <div className="field-list">
        {fields.map((field, id) => {
          return <Field id={id} field={field} />;
        })}
      </div>
    </div>
  );
}

export default TypeFields;
