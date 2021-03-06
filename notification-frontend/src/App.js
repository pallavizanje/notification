import React, { useEffect } from 'react';
import { Router , Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers/history';
import { LoginPage } from "./components/LoginPage/LoginPage";
import { HomePage } from "./components/HomePage/HomePage";
import { alertActions } from './_actions/alert.actions';
import { NotificationPage } from './components/NotificationPage/NotificationPage';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

function App() {
  const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
  
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/home" component={HomePage} />
                <PrivateRoute exact path="/notification" component={NotificationPage} />
                  <Route path="/login" component={LoginPage} />      
                  <Redirect from="*" to="/" />
              </Switch>
            </Router>
        </div>
       
      </div>
    </div>
  );
}

export default App;
