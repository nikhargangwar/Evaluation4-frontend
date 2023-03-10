/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  GET_ALL_ENTRIES,
  GET_FIELDS_BY_ID,
} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EntryCard from '../EntryCard';
import './EntryContainer.css';

function EntryContainer({ collectionId }) {
  const [error, setError] = useState();
  const [fields, setFields] = useState([]);

  const [entryList, setEntryList] = useState([1, 2, 3]);

  useEffect(() => {
    makeRequest(GET_ALL_ENTRIES, {
      data: { typeId: collectionId },
    })
      .then((response) => {
        setEntryList(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });

    makeRequest(GET_FIELDS_BY_ID, {
      data: { typeId: collectionId },
    })
      .then((response) => {
        console.log(response.data);
        setFields(response.data.map((field) => field.fieldName));
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  console.log(entryList);
  // const refreshFunction = () => {
  //   setDummyState(!dummyState);
  // };
  return (
    <div className="EntryContainer">
      <div className="header">
        <h1>Content Types</h1>
      </div>
      <div className="main-body">
        <div className="main-body-container">
          <div className="entry-heading">
            <div className="entry-text">
              <h1>{entryList.length} Entries Found</h1>
            </div>
            <div className="new-entry-button">
              <button type="button">Add a new entry</button>
            </div>
          </div>
          <div className="entry-field-heading">
            {fields.map((field) => (
              <div className="entry-heading-text">
                <h1>{field}</h1>
              </div>
            ))}
          </div>

          <div className="entry-list-container">
            {entryList.map((entry) => (
              <EntryCard fields={fields} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryContainer;
