import React from 'react';
import { Link } from 'react-router';

class Userlinks extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row center_align">
          <div className="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">
            <span className="experts_companies">
              For Experts
            </span>
          </div>
          <div className="col-xs-4 col-xs-offset-2 col-sm-4 col-sm-offset-2 col-md-4 col-md-offset-2">
            <span className="experts_companies">
              For Companies
            </span>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row center_align">
          <div className="col-xs-3 col-sm-3 col-md-2 col-md-offset-1">
            <p className="experts_companies_options">
              <Link to="/createresume">Create Resume</Link>
            </p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2">
            <p className="experts_companies_options">
              <Link to="/uploadresume"> Upload Resume </Link>
            </p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2 col-md-offset-2">
            <p className="experts_companies_options">
              <Link to="/postajob"> Post a Job </Link>
            </p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2">
            <p className="experts_companies_options">
              <Link to="/searchforexperts"> Search for Experts </Link>
            </p>
          </div>
        </div>

        <div className="row center_align">
          <div className="col-xs-3 col-sm-3 col-md-2 col-md-offset-1">
            <Link to="/createresume"><img src="../../assets/Create_Icon.png" className="experts_companies_options_icon" /></Link>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2">
            <Link to="/uploadresume"><img src="assets/Upload_Icon.png" className="experts_companies_options_icon" /></Link>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2 col-md-offset-2">
            <Link to="/postajob"><img src="assets/Post_Job.png" className="experts_companies_options_icon" /></Link>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2">
            <Link to="/searchforexperts"><img src="assets/Expert_Search.png" className="experts_companies_options_icon" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Userlinks;
