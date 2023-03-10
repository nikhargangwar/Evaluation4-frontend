/* eslint-disable react/prop-types */
import React from 'react';

import './TypeShowButton.css';

function TypeShowButton({ type }) {
  return (
    <div className="TypeShowButton">
      <h3>{type.name}</h3>
    </div>
  );
}

export default TypeShowButton;
