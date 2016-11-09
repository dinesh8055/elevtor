import React, {PropTypes} from 'react';
import Interview from './Interview';
import Sidemenu from '../../common/Sidemenu';
import { Link } from 'react-router';

const InterviewList = ({interviews}) => {
  return (
    <div>
      <Sidemenu />

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="center_align">
                <h1>Look at your interviews</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="" id="more_jobs">
            <div className="row padding_top_four">
              <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 jobs_form">
                <div className="padding_left_em">
                  <div className="row forgot padding_bot_half">
                    <h4 className="interview_notification_text savedjobs">
                      You have an interview scheduled with:
                      <span className="bold">Amazon</span>
                    </h4>
                    <h4 className="interview_notification_text savedjobs">
                      Job applied:
                      <span className="bold">Head of Sales</span>
                    </h4>
                    <h4 className="interview_notification_text savedjobs">
                      Starting in:
                      <span className="bold">1h 28m 16s</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden" id="more_jobs">
            <div className="row padding_top_four">
              <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 jobs_form">
                <div className="padding_left_em">
                  <div className="row padding_bot_half forgot">
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
              <div className="col-xs-3 col-xs-offset-6 col-sm-3 col-sm-offset-6 col-md-3 col-md-offset-6 col-lg-3 col-lg-offset-6">
                <div className="row float_right social_login_row padding_bot_two">
                  Sort:
                  <select className="salary_select">
                    <option value="all">Scheduled interviews</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row padding_top_four" id="common_form">
            <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
              <div className="row bottom_space">
                <button className="job_button">
                  <span className="find_button_text">Find more jobs</span>
                </button>
              </div>
            </div>

            <div className="col-xs-3 col-xs-offset-1 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1">
              <div className="row float_right bottom_space">
                Sort:
                <select className="salary_select">
                  <option value="all">Scheduled interviews</option>
                </select>
              </div>
            </div>

            <div>
              {interviews.map(interview =>
                <Interview key={interview.id} interview={interview} />
              )}
            </div>
          </div>

          <div class="bottom_space"></div>

        </div>
      </div>
  );
};

InterviewList.propTypes = {
  interviews: PropTypes.array.isRequired
};

export default InterviewList;
