import React from 'react';
import { Link } from 'react-router';

class CreateResume extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <button className="back_button">
                <span className="back_button_text">
                  <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Back
                </span>
              </button>
            </div>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="center_align">
                <h1>Record your resume</h1>
              </div>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <button className="back_button float_right">
                <span className="back_button_text">
                  <Link to ="/editprofile">  Skip  </Link>
                  <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="personal_information">
          <div className="row">
            <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
              <div className="row">
                <h2>Record a two minute long video highlighting your professional skills and experience</h2>
              </div>
            </div>
          </div>

          <div className="row social_login_row">
            <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
              <div className="insert_video"></div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row padtop">
            <div className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5 col-md-2 col-md-offset-5">
              <div className="row">
                <div className="ellipse ">
                  <div className="rectangle"></div>
                </div>
              </div>
              <div className="row center_align">
                <h4>Click to stop</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row social_login_row_b padbottom">
            <div className="col-xs-3 col-xs-offset-3 col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-3">
              <div className="row center_align">
                <button className="submit_upload_button">
                  <span className="submit_upload_button_text">Submit resume</span>
                </button>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <div className="row center_align">
                <button className="submit_upload_button">
                  <span className="submit_upload_button_text">Upload resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default CreateResume;
