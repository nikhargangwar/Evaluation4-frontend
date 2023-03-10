/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';

import {
  HOME_ROUTE,
  ERROR_ROUTE,
  CARD_DETAILS,
  INVALID_CREDENTIALS,
} from './constants/routesPaths';
import InvalidCredentials from './pages/InvalidCredentials';
// import ERROR_ROUTE from './constants/routesPaths';

// import SONG_DETAILS_ROUTE from './constants/routesPaths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path={HOME_ROUTE}
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        {/* <Route path={CARD_DETAILS} element={<CardDetails />} /> */}
        <Route path={ERROR_ROUTE} element={<Error />} />
        <Route path={INVALID_CREDENTIALS} element={<InvalidCredentials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
