/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { AUTHENTICATE_USER } from '../../constants/apiEndPoints';
import { ERROR_ROUTE, HOME_ROUTE } from '../../constants/routesPaths';
// import './index.css';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await makeRequest(AUTHENTICATE_USER, {
        data: { username, password },
      });
      localStorage.setItem('accessToken', userData.accessToken);
      navigate(HOME_ROUTE);
    } catch (e) {
      if (e.response?.status === 400) {
        alert('Invalid id or password.');
      } else if (e.response?.status) {
        navigate(`${ERROR_ROUTE}/${e.response.status}`);
      } else {
        navigate(ERROR_ROUTE);
      }
      return null;
    }
    return true;
  };
  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginUsernameLabel">
          <p>Username</p>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className="loginPasswordLabel">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <input className="loginInput" type="submit" value="Login" />
      </form>
    </div>
  );
}
