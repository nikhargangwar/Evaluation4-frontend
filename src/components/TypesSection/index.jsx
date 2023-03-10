/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import NewTypes from '../NewTypes';
import TypeFields from '../TypeFields';

// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './TypesSection.css';

function TypesSection({ allTypes }) {
  const [typeSpecificId, setTypeSpecificId] = useState(1);
  return (
    <div className="TypesSection">
      <div className="header">
        <h1>Content Types</h1>
      </div>
      <div className="body-wrapper">
        <div className="new-type-container">
          <NewTypes allTypes={allTypes} setTypeSpecificId={setTypeSpecificId} />
        </div>
        <div className="fields-container">
          <TypeFields typeSpecificId={typeSpecificId} />
        </div>
      </div>
    </div>
  );
}

export default TypesSection;
