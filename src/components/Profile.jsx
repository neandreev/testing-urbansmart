import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as authActions from '../app/actions';

const Profile = (props) => {
  const { authenticatedUser, users } = useSelector((state) => state.auth);
  const user = _.find(users, (elem) => elem.username === authenticatedUser);
  const { logout } = bindActionCreators(authActions, useDispatch());
  
  const handleLogout = () => {
    logout();
    props.history.push('/');
  } 

  return (
    <div className="card my-2">
      <h1 className="card-header">
        Welcome, { authenticatedUser }
      </h1>
      <div className="card-body">
        { JSON.stringify(user, null, 2) }
      </div>
      <div className="card-footer">
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
      </div>
    </div>
  )
};

export default Profile;
