import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const { authenticatedUser } = useSelector((state) => state.auth);
  return (
    <Layout>
      <Switch>
        {
          authenticatedUser
            ? <Route path="/profile" component={Profile} />
            : <Route path="/" component={Login} />
        }
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
