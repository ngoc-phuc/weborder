import React, { Component } from 'react';
import './css/header.scss';
import HeaderUser from './header-user-menu';

class Header extends Component {
  render() {
    return (
      <div className="App" id = "kt">
        <nav className="navbar navbar-expand-lg fixed-top header" >
          <a >
            <i className="fa fa-align-left fa-2x logo" aria-hidden="true" onClick={ this.props.changeWidth }></i>
          </a>
          <nav className="navbar-brand-logo mr-4 mr_t_10">
            <a className="" >
              <img className="w-70 p-2" src={ require('./images/vinmus.png') }/>
            </a>
          </nav>

          <ul className="navbar-nav ml-auto flex-row mr-3">
            <li  className="d-flex align-items-center cursor-pointer">
              <i className="fa fa-2x fa-cart-plus " ></i>
              <div id="cart" className="mt-1">3</div>
            </li>
            <li className="d-flex align-items-center ml-2">
            
            </li>
            <HeaderUser></HeaderUser>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
