import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";
import AddService from "./components/AddService/AddService";
import ManageServices from "./components/ManageServices/ManageServices";
import AddReview from "./components/AddReview/AddReview";
import Orders from "./components/Orders/Orders";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import OrdersList from "./components/OrdersList/OrdersList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>

          <PrivateRoute path="/addReview">
            <AddReview/>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin/>
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>

          <PrivateRoute path="/ordersList">
            <OrdersList/>
          </PrivateRoute>

          <PrivateRoute path="/manageServices">
            <ManageServices/>
          </PrivateRoute>

          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
