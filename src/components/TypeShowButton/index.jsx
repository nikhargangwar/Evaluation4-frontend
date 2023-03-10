/* eslint-disable react/prop-types */
import React from 'react';

import './TypeShowButton.css';

function TypeShowButton({ type, setTypeSpecificId }) {
  const handleClick = () => {
    setTypeSpecificId(type.id);
  };

  return (
    <div className="TypeShowButton">
      <button type="button" onClick={handleClick}>
        <h3>{type.name}</h3>
      </button>
    </div>
  );
}

export default TypeShowButton;
