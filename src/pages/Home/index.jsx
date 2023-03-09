import React from 'react';
import CollectionSection from '../../components/CollectionSection';
import TypesSection from '../../components/TypesSection';

// import MainBody from '../../components/MainBody';
// import Footer from '../../components/Footer';

import './Home.css';

function Home() {
  return (
    <div className="app">
      <div className="left-app-container">
        <CollectionSection />
      </div>
      <div className="right-app-container">
        <TypesSection />
      </div>
    </div>
  );
}

export default Home;
