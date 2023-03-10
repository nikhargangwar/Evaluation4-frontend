/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './CollectionButton.css';

function CollectionButton({ collection, setCollectionId }) {
  const onClickHandler = () => {
    setCollectionId(collection.id);
  };
  return (
    <div className="CollectionButton">
      <button type="button" onClick={onClickHandler}>
        <h4>{collection.name}</h4>
      </button>
    </div>
  );
}

export default CollectionButton;
