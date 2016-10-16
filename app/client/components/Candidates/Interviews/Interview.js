import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Interview = ({interview}) => {
  return (
    <div>
      <div className="row padding_bot_two" id="job_1">
        <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 job_box">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img src="assets/Elevtor.png" className="job_logo" />
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <h3>{interview.title}, {interview.city}, {interview.state}</h3>
            <h4 className="pad_top_point_four savedjobs">{interview.company}</h4>
            <h5 className="pad_top_point_three">{interview.salary} / {interview.salaryPer}</h5>
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
                  <h6>Matched {interview.matchedDaysAgo} days ago</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="interviews_status">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <span className="bold">Status:</span> {interview.status}
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <span className="float_right">
                <span className="bold">Date:</span> {interview.dateScheduled}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Interview.propTypes = {
  interview: PropTypes.object.isRequired
};

export default Interview;
