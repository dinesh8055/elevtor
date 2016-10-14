import React, {PropTypes} from 'react';
import SavedJob from './SavedJob';
import SavedJobExpired from './SavedJobExpired';
import Sidemenu from '../../common/Sidemenu';
import { Link } from 'react-router';

const SavedJobList = ({savedJobs}) => {
  return (
    <div>
      <Sidemenu />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="center_align">
              <h1>Look at your saved jobs</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="hidden" id="more_jobs">
          <div className="row padding_top_four">
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 jobs_form">
              <div className="padding_left_em">
                <div className="row forgot padding_bot_half">
                  <span className="find_button_text">Find more jobs</span>
                </div>
                <div className="row padding_bot_half">
                  <input type="text" className="saved_signup_forms" placeholder="Job Title" />
                  <input type="text" className="saved_signup_forms" placeholder="Location / Zip Code" />
                  <button className="invert_job_button">
                    <span className="invert_button_text">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-7 col-sm-2 col-sm-offset-7 col-md-2 col-md-offset-7 col-lg-2 col-lg-offset-7">
              <div className="row float_right header padding_bot_two">
                Sort:
                <select className="salary_select">
                  <option value="all">All saved jobs</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row padding_top_four" id="common_form">
          <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
            <div className="row bottom_space">
              <Link to="/search">
                <button className="job_button">
                  <span className="button_text">Find more jobs</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-xs-2 col-xs-offset-2 col-sm-2 col-sm-offset-2 col-md-2 col-md-offset-2">
            <div className="row float_right bottom_space">
              Sort:
              <select className="salary_select">
                <option value="all">All saved jobs</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          {savedJobs.map(savedJob =>
            <SavedJob key={savedJob.id} savedJob={savedJob} />
          )}
        </div>

        <SavedJobExpired />

      </div>
      <div className="bottom_space"></div>

    </div>

  );
};

SavedJobList.propTypes = {
  savedJobs: PropTypes.array.isRequired
};

export default SavedJobList;
