/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CollectionSection from '../../components/CollectionSection';
import TypesSection from '../../components/TypesSection';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_TYPES } from '../../constants/apiEndPoints';

import './Home.css';

function Home() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_ALL_TYPES, {})
      .then((response) => {
        setCollections(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  return (
    <div className="app">
      <div className="left-app-container">
        <CollectionSection allCollections={collections} />
      </div>
      <div className="right-app-container">
        <TypesSection allTypes={collections} />
      </div>
    </div>
  );
}

export default Home;
