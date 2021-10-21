import _ from 'lodash';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as authActions from '../app/actions';

const Login = (props) => {
  const { login } = bindActionCreators(authActions, useDispatch());
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useRef();

  const handleLogin = () => {
    const { username } = user.current;
  
    login(username);
    props.history.push('/profile');
  };

  const isReadyToSubmit = () => {
    const existingUser = _.find(auth.users, (user) => user.username === username);
    
    user.current = existingUser;

    return existingUser && existingUser.password === password;
  }

  return (
    <div className="my-2">
      <div className="card">
        <h4 className="card-header text-center">Welcome</h4>
        <div className="card-body">
          <form>
            <div className="form-floating mb-2">
              <input
                type="text"
                onChange={({ target }) => setUsername(target.value)}
                value={username}
                className="form-control"
              />
              <label htmlFor="username">Login</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="password"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button disabled={!isReadyToSubmit()} className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
};

export default Login;