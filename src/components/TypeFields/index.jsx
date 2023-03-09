import React, { useState } from 'react';
// import MainBody from '../../components/MainBody';
import Field from '../Field';

import './TypeFields.css';

function TypeFields() {
  const [fields, setFields] = useState([1, 2, 3, 4]);
  return (
    <div className="TypeFields">
      <div className="field-header">
        <h1>Company Profile</h1>
      </div>
      <div className="field-button">
        <button type="button">Add Another Field</button>
      </div>
      <div className="field-list">
        {fields.map((field) => {
          return <Field />;
        })}
      </div>
    </div>
  );
}

export default TypeFields;
