import React from "react";

import { connect } from 'react-redux';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import "./header.styles.scss";

import { Link } from "react-router-dom";

import { auth } from '../../firebase/firebase';

import CartIcon from '../cart-icon/cart-icon.component';

import { createStructuredSelector } from 'reselect';

import { hiddenSelector } from '../../redux/cart/cart.selector';

import { currentUserSelect } from '../../redux/UserReducer/user.selector';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo"> Logo </h1>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>

        {
          currentUser 
          ? 
          <div className='option' onClick={()=> auth.signOut() }> SIGN OUT </div>
          : 
          <Link className="option" to="/signin">
            Sign In
          </Link>
        }

        <Link className="option" to="/shop">
          contact
        </Link>

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// HOW TO ACCSESS TO STATE IN REDUCER
// mapStateToProps => any another name  
// used by reselect state
const mapStateToProps = createStructuredSelector ({
    currentUser: currentUserSelect, // state[ param ].user[ reducer key ].stateproperty
    hidden: hiddenSelector
  })


export default connect(mapStateToProps)(Header);


/**
 * CONNECT => react-redux
 * access to state reducer => mapStateToProps(state)
 * state.reducerKey.valueInState
 */


