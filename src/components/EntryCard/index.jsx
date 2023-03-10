/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './EntryCard.css';

function EntryCard({ fields, entry }) {
  return (
    <div className="entry-card-wrapper">
      {fields.map((field) => (
        <div className="entry-card">{entry.data[field]}</div>
      ))}
    </div>
  );
}

export default EntryCard;
