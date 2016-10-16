import React from 'react';
import SearchFilter from './SearchFilter';
import JobList from './JobList';


const Search = ({jobs}) => {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="center_align">
                <h1>The Career Elevator</h1>
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
                    <span className="result_button_text">Find more jobs</span>
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
          </div>

          <div className="row header">
            <div className="col-xs-8 col-xs-offset-1 col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-1 col-lg-8 col-lg-offset-1">
              <h3>Searching for: Sales Engineer jobs in Philadelphia, PA</h3>
              <h5>Related searches:
                <a href="#">Software Engineer</a> |
                <a href="#">Product Engineer</a> |
                <a href="#">Computer Engineer</a> |
                <a href="#">Blog Engineer</a>
              </h5>
            </div>
          </div>

          <div className="row padding_top_em">
          <SearchFilter />

          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 results_structure">
            <div className="row">
              <div className="col-xs-2 col-xs-offset-9 col-sm-2 col-sm-offset-9 col-md-2 col-md-offset-9 col-lg-2 col-lg-offset-9">
                <div className="row float_right padding_top_em padding_bot_two">
                  Sort:
                  <select className="salary_select">
                    <option value="all">All saved jobs</option>
                  </select>
                </div>
              </div>
            </div>

            <JobList jobs={jobs} />
            <JobList jobs={jobs} className="forgot"/>
            <JobList jobs={jobs} className="forgot"/>
          </div>
        </div>
          <div class="bottom_space"></div>
        </div>
      </div>
    )
};

export default Search;
