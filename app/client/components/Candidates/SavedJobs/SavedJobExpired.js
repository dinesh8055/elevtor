import React from 'react';
import Sidemenu from '../../common/Sidemenu';
import { Link } from 'react-router';

const SavedJobExpired = React.createClass({
  render() {
    return (
      <div>
        <div className="row padding_bot_two" id="job_3">
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
                  <img src="assets/share_gray.png" className="job_icons float_right" />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img src="assets/star_gray.png" className="job_icons float_right" />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="float_right padding_top_em">
                    <h5>Posted 62 days ago</h5>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="float_right padding_top_em">
                    <h3>Job expired</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default SavedJobExpired;
