import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserStatus, setUserInfo,setLogOrNot } from '../../app/Slices/loginSlice';
import UserInfo from "./User"

function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({});
  const [loginStatus, setLoginStatus] = useState('');
  const [writePermission, setWritePermission] = useState(false);
  const [logout, setLogout] = useState(false);

  const loginSt = useSelector((state) => state.login.loginSt);
  const logOrNot = useSelector((state) => state.login.logOrNot);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/CURD/login", login,{
        withCredentials: true // This is crucial for cookie handling
    });

      if (data?.error) {
        setLoginStatus(data?.error);
        return;
      }

      setWritePermission(data.writePermission);
      setLogout(true);
      
      dispatch(setLogOrNot(true))
      dispatch(setUserInfo(data.userInfo));
      dispatch(setUserStatus(data.writePermission));

      console.log('Login Status:', data);
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  if(logOrNot) {
    return <UserInfo />;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card shadow-lg p-4 w-50">
      <label className="h5 text-center text-primary mb-4">{loginStatus}</label>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email or Username"
            className="form-control"
            name="email"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            name="password"
            onChange={handleChange}
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">
        <Link to="/reg" className="text-secondary">Sign in?</Link>
      </p>
    </div>
  </div>
  );
}


export default Login;