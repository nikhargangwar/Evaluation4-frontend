/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from '../../constants/routesPaths';
import './Login.css';
import websiteImage from '../../assets/e2e assets code academy/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx@2x.png';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post('http://localhost:3000/login', data)
      .then((res) => {
        const { token } = res.data;
        console.log(token);
        localStorage.setItem(token, null);
        navigate(HOME_ROUTE);
      })
      .catch((err) => {
        navigate(ERROR_ROUTE);
        console.log(err);
      });

    return true;
  };
  return (
    <div className="loginContainer">
      <div className="left-container">
        <div className="website-title">
          <h1>
            Design APIs fast, <br />
            Manage Conntent easily
          </h1>
        </div>
        <div className="website-image">
          <img src={websiteImage} alt="" />
        </div>
      </div>
      <div className="right-container">
        <div className="form-heading">
          <h2>Login to you CMS+ account</h2>
        </div>
        <div className="form">
          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="loginUsernameLabel">
              <p>Email</p>
              <input
                type="text"
                value={email}
                onChange={handleUsernameChange}
              />
            </label>
            <br />
            <label className="loginPasswordLabel">
              <p>Password</p>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <br />
            <button type="button">
              <input className="loginInput" type="submit" value="Login" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
