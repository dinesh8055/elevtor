import React from 'react';
import { Link } from 'react-router';
import Navbar from '../common/Navbar';
import Social from './Social';

class Signup extends React.Component {
  render () {
    return (
      <div>


        <div className="container-fluid">
          <div className="row">
            <div className="center_align">
              <h1>Complete your sign up</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <div className="center_align">
                <button className="user_type active">
                  <span className="user_type_text center_align">Job Seeker</span>
                </button>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <div className="center_align">
                <button className="user_type">
                  <span className="user_type_text text_active center_align">Hiring Manager</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Social />

        <div className="container-fluid">
          <div className="row social_login_row">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
              <div className="row">
                <h2>Fill out the information below to complete your registration</h2>
              </div>
            </div>
          </div>

          <div className="row social_login_row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h4>First name</h4>
              <input type="text" className="signup_forms" id="firstname" placeholder="John" />
            </div>

            <div className="col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1">
              <h4>Last name</h4>
              <input type="text" className="signup_forms" id="lastname" placeholder="Doe" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h4>Country</h4>
              <input type="text" className="signup_forms" id="country" placeholder="Insert your country" />
            </div>

            <div className="col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1">
              <h4>Zip code</h4>
              <input type="text" className="signup_forms" id="zipcode" placeholder="xxxxx" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>E-mail</h4>
              <input type="text" className="signup_forms" id="email" placeholder="insert.your.email@here.com" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h4>Password</h4>
              <input type="password" className="signup_forms" id="password" placeholder="********" />
            </div>

            <div className="col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1">
              <h4>Confirm password</h4>
              <input type="password" className="signup_forms" id="confirm_password" placeholder="********" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row .social_login_row_b">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align">
                <button className="signup_button">
                  <span className="signup_button_text">Confirm</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row forgot padbottom">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align">
                <h4>Already a member? <Link to="/login" className="heavy">Login</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
