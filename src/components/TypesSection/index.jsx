/* eslint-disable react/prop-types */
import React from 'react';
import NewTypes from '../NewTypes';
import TypeFields from '../TypeFields';

// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './TypesSection.css';

function TypesSection({ allTypes }) {
  return (
    <div className="TypesSection">
      <div className="header">
        <h1>Content Types</h1>
      </div>
      <div className="body-wrapper">
        <div className="new-type-container">
          <NewTypes allTypes={allTypes} />
        </div>
        <div className="fields-container">
          <TypeFields />
        </div>
      </div>
    </div>
  );
}

export default TypesSection;
