import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const SavedJob = ({savedJob}) => {
  return (
    <div>
    <div className="row padding_bot_two" id="job_1">
      <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 job_box">

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <img src="assets/Elevtor.png" className="job_logo" />
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h3>{savedJob.title}, {savedJob.city}, {savedJob.state}</h3>
          <h4 className="pad_top_point_four savedjobs">{savedJob.company}</h4>
          <h5 className="pad_top_point_three">{savedJob.salary}/ {savedJob.salaryPer}</h5>
          <h5>{savedJob.description}</h5>
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
                <h5>Posted {savedJob.postedDaysAgo} days ago</h5>
                <h5 className="bbb">Expires in {savedJob.expiresinDays} days</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="float_right padding_top_em">
                <button className="apply_button">
                  <span className="button_text">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    </div>
  );
};

SavedJob.propTypes = {
  savedJob: PropTypes.object.isRequired
};

export default SavedJob;
