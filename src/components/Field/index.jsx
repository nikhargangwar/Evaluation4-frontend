/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './Field.css';

function Field({ field }) {
  return (
    <div className="Field">
      <div className="left-design">
        <h3>Ab</h3>
      </div>
      <div className="fieldName">
        <h2>{field.fieldName}</h2>
      </div>
      <div className="fieldType">
        <h2>{field.fieldType}</h2>
      </div>
    </div>
  );
}

export default Field;
