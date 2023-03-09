import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

function ProtectedRoutes({ children }) {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState('');
  React.useEffect(() => {
    const value = localStorage.getItem('token');
    axios
      .get('http://localhost:3000/verify', {
        Authorization: value,
      })
      .then((response) => {
        if (response.data) {
          setUser(response.data.email);
          console.log();
          setToken(true);
        } else {
          setToken(false);
        }
      });
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <h1>Hi {user}</h1>
          {children}
        </div>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </div>
  );
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
