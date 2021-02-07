import React, { useEffect } from 'react'; 
import Header from './component/Header';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Payment from './component/Payment';
import Orders from './component/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { useStateValue } from './component/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51I7ZtwJfIWiE56ZrtUAFUAONJhkp5quQPcErHEeaGP4HMfYcuc0HGIkPLpJax0ngEmEdAIDVzHgKOmOZJoQ3vLg500GXu1wqTw'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
              <Header />
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
