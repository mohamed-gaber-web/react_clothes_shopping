import React from 'react';
import './App.css';
import HomePage from './pages/homepage/home-page.component';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/UserReducer/user.action';

import { Route, Switch, Redirect } from 'react-router-dom';

import ShopPage from './pages/shop-page/shop-page.component';
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from './components/header/header.component';
import SignInAndSignUpPgae from './pages/sign-in-and-up-page/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase';

class App extends React.Component {
  // state = {
  //   currentUser: null
  // }

  unSubscribeFromAuth = null;

  componentDidMount = () => {

    const { currentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            currentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      }

      currentUser(userAuth);

    })

  }

  componentWillUnmount = () => { this.unSubscribeFromAuth(); }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          {/* <Route path="/signin" component={SignInAndSignUpPgae} /> */}
          <Route path="/signin" 
            render={() => this.props.signCurrentUser 
              ? (<Redirect to="/" />) 
              : (<SignInAndSignUpPgae />)}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => {
  return {
    signCurrentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  currentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
  access to action used connect method from react-redux
  used mapDispatchToProps
  key: param => dispatch(action)
  key used in component by props

  -- if user sign in redirect to home page and not sign in redirect to signiAndsignOut page
    used Redirect Component from react-router-dom  
    <Redirect to="" />
  */
