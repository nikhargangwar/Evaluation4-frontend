import React, { useState } from 'react';
// import MainBody from '../../components/MainBody';
import TypeShowButton from '../TypeShowButton';

import './NewTypes.css';

function NewTypes() {
  const [types, setTypes] = useState([1, 2, 3, 4]);
  return (
    <div className="NewTypes">
      <div className="new-type-wrapper">
        <div className="new-type-button">
          <button type="button">+ New Type</button>
        </div>
        <div className="list-of-type-buttons">
          {types.map((type) => {
            return <TypeShowButton />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewTypes;
