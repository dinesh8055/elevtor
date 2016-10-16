import React from 'react';
import Sidemenu from '../../common/Sidemenu'
import { Link } from 'react-router';

class EditProfile extends React.Component {
  render() {
    return (
      <div>

        <Sidemenu />

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="center_align">
                <h1>Edit your profile</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="personal_information">
          <div className="row">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
              <div className="row">
                <h2>Update any information you deem relevant for employers to see</h2>
              </div>
            </div>
          </div>

          <div className="row social_login_row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h3>Personal Information</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h4>First name</h4>
              <input type="text" className="profile_signup_forms" id="firstname" placeholder="John"/>
            </div>

            <div className="col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1">
              <h4>Last name</h4>
              <input type="text" className="profile_signup_forms" id="lastname" placeholder="Doe"/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <h4>Country</h4>
              <input type="text" className="profile_signup_forms" id="country" placeholder="Insert your country"/>
            </div>

            <div className="col-xs-1 col-sm-1 col-md-1">
              <h4>Zip code</h4>
              <input type="text" className="profile_signup_forms" id="zipcode" placeholder="xxxxx"/>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2">
              <h4>Photo</h4>
              <div className="photoUpload btn btn-primary">
                <span>Upload</span>
                <input type="file" className="photo_button" name="photo" accept="image/*"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>Current Position</h4>
              <input type="text" className="profile_signup_forms" id="current_position" placeholder="Actual ocupation"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>Education</h4>
              <input type="text" className="profile_signup_forms" id="education" placeholder="Insert your education"/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>Desired Position</h4>
              <input type="text" className="profile_signup_forms" id="desired_position" placeholder="Desired ocupation"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>Desired Salary</h4>
              <input type="text" className="profile_signup_forms" id="desired_salary" placeholder="Desired salary" />
              <select className="salary_select" name="salary">
                <option value="year">/ year</option>
                <option value="month">/ month</option>
                <option value="hour">/ hour</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
              <h4>Skills</h4>
              <input type="text" className="skills_form profile_signup_forms" id="skills" placeholder="What do you know?"/>
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
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>LinkedIn</h4>
              <input type="text" className="profile_signup_forms" id="linkedin" placeholder="LinkedIn link"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>Facebook</h4>
              <input type="text" className="profile_signup_forms" id="facebook" placeholder="Facebook link"/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>Twitter</h4>
              <input type="text" className="profile_signup_forms" id="twitter" placeholder="Twitter link"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>GitHub</h4>
              <input type="text" className="profile_signup_forms" id="github" placeholder="GitHub link"/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>Dribble</h4>
              <input type="text" className="profile_signup_forms" id="dribble" placeholder="Dribble link"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>Behance</h4>
              <input type="text" className="profile_signup_forms" id="behance" placeholder="Behance link"/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <h4>Website</h4>
              <input type="text" className="profile_signup_forms" id="website" placeholder="Website link"/>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3">
              <h4>Blog</h4>
              <input type="text" className="profile_signup_forms" id="blog" placeholder="Blog link"/>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row social_login_row_b">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row center_align padbottom">
                <button className="save_button">
                  <Link to ="/profile">
                    <span className="save_button_text">Confirm</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default EditProfile;
