/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './CollectionSection.css';
import CollectionButton from '../CollectionButton';

function CollectionSection() {
  const [collections, setCollections] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="CollectionSection">
      <div className="collection-section-header">
        <h1>CMS+</h1>
      </div>
      <div className="collection-types">
        <h3>COLLECTION TYPES</h3>
      </div>
      <div className="collection-section-content">
        {collections.map((collection) => {
          return <CollectionButton />;
        })}
      </div>
    </div>
  );
}

export default CollectionSection;
