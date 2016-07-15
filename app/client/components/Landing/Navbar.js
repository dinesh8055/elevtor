import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar-fixed-top menu-bar">
        <Link to="/" className="navbar-left float_left">
          <img src="assets/Elevtor.png" alt="Elevtor Logo" id="logo_image" />
        </Link>
        <div className="navbar-right float_right">
          <div className="sign-in"><Link to="/">Sign in</Link></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
