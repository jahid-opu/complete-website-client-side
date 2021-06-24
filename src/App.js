import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Checkout from './components/Dashboard/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login'
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import Review from './components/Dashboard/Review/Review';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import AddServices from './components/Dashboard/AddServices/AddServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
