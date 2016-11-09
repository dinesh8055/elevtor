import React, {PropTypes} from 'react';

const JobListing = ({job}) => {
  return (
    <div>
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 listing center_align">Sponsored listing</div>
      </div>

      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div className="row">
          <img src="assets/Elevtor.png" className="result_job_logo" />
        </div>
        <div className="row">
          <img src="assets/star_black.png" className="job_icons float_left" />
          <img src="assets/share_blue.png" className="job_icons float_right" />
        </div>
      </div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <h3>{job.title}, {job.city}, {job.state}</h3>
        <h4 className="pad_top_point_four savedjobs">{job.company}</h4>
        <h5 className="pad_top_point_three">{job.salary} / {job.salaryPer}</h5>
        <h5>{job.description}</h5>
      </div>

      <div className="row pad_bot_em">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h6 className="padding_top_em">Posted {job.postedDaysAgo} days ago</h6>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="float_right pad_ten_percent">
            <button className="result_apply_button">
              <span className="result_button_text">Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

JobListing.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobListing;
