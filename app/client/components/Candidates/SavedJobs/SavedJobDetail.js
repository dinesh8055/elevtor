import React from 'react';
import { Link } from 'react-router';

class SavedJobDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="row hidden padding_bot_two" id="job_1b">
          <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 job_box">

            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <img src="assets/Elevtor.png" className="job_logo" />
            </div>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <h3>Head of Sales, Palo Alto, CA</h3>
              <h4 className="pad_top_point_four savedjobs">Facebook</h4>
              <h5 className="pad_top_point_three">$170,000 / year</h5>
              <h5>Hiring a head of sales pro to build our book of business and create endless income for us</h5>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <img src="assets/share_blue.png" className="job_icons float_right" />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img src="assets/star_black.png" className="job_icons float_right" />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="float_right padding_top_em">
                    <h5>Posted 2 days ago</h5>
                    <h5 className="bbb">Expires in 58 days</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-8 col-xs-offset-1 col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-1 col-lg-8 col-lg-offset-1">
              <h5>
                <span className="bold">Skills:</span>
                <span id="skills">
                  CMS Management, B2B Sales, B2C Sales
                </span>
              </h5>
              <h5>
                <span className="bold">Hiring Manager:</span>
                <span id="manager">
                  <a href="#">Laurie Clink</a>
                  <a href="#"><img src="assets/linkedin_black.png" alt="LinkedIn" className="details_social_links" /></a>
                  <a href="#"><img src="assets/facebook_black.png" alt="Facebook" className="details_social_links" /></a>
                  <a href="#"><img src="assets/twitter_black.png" alt="Twitter" className="details_social_links" /></a>
                </span>
              </h5>
            </div>

            <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10">
              <div className="insert_job_video"></div>
            </div>

            <div className="col-xs-8 col-xs-offset-1 col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-1 col-lg-8 col-lg-offset-1">
              <h4 className="pad_top_point_three savedjobs">Company Info</h4>
              <h5>
                <span className="bold">Size:</span>
                <span>500-1000+ Employees</span>
              </h5>
              <h5>
                <span className="bold">Website:</span>
                <span><a href="www.facebook.com" target="_blank">www.facebook.com</a></span>
              </h5>
              <h5>
                <span className="bold">Headquarters:</span>
                <span>Palo Alto, CA</span>
              </h5>
              <h5>
                <span className="bold">Revenue:</span>
                <span>3 Billion USD per year</span>
              </h5>
              <h5>
                <span className="bold">Industry:</span>
                <span>Social Networking</span>
              </h5>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="float_right m_right_em">
                  <button className="apply_button">
                    <span className="button_text">Apply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SavedJobDetail;
