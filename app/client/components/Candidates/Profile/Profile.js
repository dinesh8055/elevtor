import React from 'react';
import Sidemenu from '../../common/Sidemenu';
import { Link } from 'react-router';

class Profile extends React.Component {
  render() {
    return (
      <div>

        <Sidemenu />

        <div className="container-fluid">
          <div className="row social_login_row">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5 col-lg-2 col-lg-offset-5">
              <div className="center_align">
                <img src="assets/man.png" className="user_image"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
              <div className="center_align">
                <h1>Jon Gruden</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
              <div className="center_align">
                <h4>Tampa Bay, Florida, United States</h4>
                <a href="#"><img src="assets/linkedin_black.png" alt="LinkedIn" className="social_links" /></a>
                <a href="#"><img src="assets/facebook_black.png" alt="Facebook" className="social_links" /></a>
                <a href="#"><img src="assets/twitter_black.png" alt="Twitter" className="social_links" /></a>
                <Link to="/editprofile">EDIT</Link>
              </div>
            </div>
          </div>

          <div className="row social_login_row">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div className="insert_profile_video"></div>
            </div>
          </div>

          <div className="row social_login_row">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <h4 className="title">Current Position</h4>
              <h4>Assistant Head Coach</h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
              <h4 className="title">Desired Position</h4>
              <h4>Head Coach</h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4 className="title">Desired Salary</h4>
              <h4>$3,500,000.00 / year</h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <h4 className="title">Education</h4>
              <h4>Bachelor of Management of Teams</h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <h4 className="title">Skills</h4>
              <a href="#"><span className="skills">Management</span></a>
              <a href="#"><span className="skills">Coaching</span></a>
              <a href="#"><span className="skills">Teaching</span></a>
              <a href="#"><span className="skills">Offensive Formations</span></a>
              <a href="#"><span className="skills">Salary Cap</span></a>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="links">
          <div className="row padding_top_em">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h3>Links</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
              <h4 className="title">LinkedIn</h4>
              <h4><a href="#">www.linkedin.com/JonGruden</a></h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4 className="title">Facebook</h4>
              <h4><a href="#">www.facebook.com/JonGruden</a></h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
              <h4 className="title">Twitter</h4>
              <h4><a href="#">www.twitter.com/JonGruden</a></h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4 className="title">GitHub</h4>
              <h4><a href="#">www.github.com/JonGruden</a></h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
              <h4 className="title">Dribble</h4>
              <h4><a href="#">www.dribble.com/JonGruden</a></h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4 className="title">Behance</h4>
              <h4><a href="#">www.behance.com/JonGruden</a></h4>
            </div>
          </div>

          <div className="row padtop">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3 col-lg-3 col-lg-offset-3">
              <h4 className="title">Website</h4>
              <h4><a href="#">www.jongruden.com</a></h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4 className="title">Blog</h4>
              <h4><a href="#">www.spider2ybanana.com</a></h4>
            </div>
          </div>
        </div>

        <div className="bottom_space"></div>

      </div>
    )
  }
};

export default Profile;
