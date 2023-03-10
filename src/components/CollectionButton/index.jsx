/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './CollectionButton.css';

function CollectionButton({ name }) {
  return (
    <div className="CollectionButton">
      <h4>{name}</h4>
    </div>
  );
}

export default CollectionButton;
