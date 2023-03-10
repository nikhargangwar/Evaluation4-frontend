/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CollectionSection from '../../components/CollectionSection';
import TypesSection from '../../components/TypesSection';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_TYPES } from '../../constants/apiEndPoints';
import EntryContainer from '../../components/EntryContainer';
import './Home.css';

function Home() {
  const [collections, setCollections] = useState([]);
  const [dummyState, setDummyState] = useState(true);
  const [error, setError] = useState();
  const [collectionId, setCollectionId] = useState(0);

  useEffect(() => {
    makeRequest(GET_ALL_TYPES, {})
      .then((response) => {
        setCollections(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  console.log(collectionId);
  return (
    <div className="app">
      <div className="left-app-container">
        <CollectionSection
          allCollections={collections}
          setCollectionId={setCollectionId}
        />
      </div>
      <div className="right-app-container">
        {collectionId === 0 ? (
          <TypesSection allTypes={collections} />
        ) : (
          <EntryContainer collectionId={collectionId} />
        )}
      </div>
    </div>
  );
}

export default Home;
