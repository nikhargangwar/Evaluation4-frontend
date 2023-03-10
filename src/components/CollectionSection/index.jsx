/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import './CollectionSection.css';
import CollectionButton from '../CollectionButton';

function CollectionSection({ allCollections, setCollectionId }) {
  return (
    <div className="CollectionSection">
      <div className="collection-section-header">
        <h1>CMS+</h1>
      </div>
      <div className="collection-types">
        <h3>COLLECTION TYPES</h3>
      </div>
      <div className="collection-section-content">
        {allCollections.map((collection, id) => {
          return (
            <CollectionButton
              id={id}
              collection={collection}
              setCollectionId={setCollectionId}
            />
          );
        })}
      </div>
      {/* <div className="black-button">
        <button type="button" onClick={setCollectionId(0)}>
          <h2>CONTENT TYPE BUILDER</h2>
        </button>
      </div> */}
    </div>
  );
}

export default CollectionSection;
