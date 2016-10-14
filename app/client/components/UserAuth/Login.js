import React from 'react';
import { Link } from 'react-router';
import Navbar from '../common/Navbar';
import Social from './Social';

class Login extends React.Component {
  render () {
    return (
      <div className="login_page">


        <div className="container-fluid">
          <div className="row">
            <div className="header center_align">
              <h1>Log in</h1>
            </div>
          </div>
        </div>

        <Social />

        <div className="container-fluid">
          <div className="row login_fields">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
              <div className="row">
                <h4>E-mail</h4>
                <input type="text" className="login_forms center_align" id="email" placeholder="insert.your.email@here.com" />
              </div>
              <div className="row">
                <h4>Password</h4>
                <input type="password" className="login_forms center_align" id="password" placeholder="********" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row social_login_row_b">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align">
                <button className="login_button">
                  <span className="login_button_text">Log in</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row forgot">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align">
                <h4>Forgot your password?</h4>
                <h4 className="heavy">Click here</h4>
              </div>
            </div>
          </div>

          <div className="row forgot padbottom">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align">
                <h4>Not a member? <Link to ="/signup" className="heavy">Sign Up</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
