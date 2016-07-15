import React from 'react';
import { Link } from 'react-router';

class Searchbar extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1">
              <div className="row">
                <div className="container jumbotron_text">
                  Disrupting the way you search for a job
                </div>
              </div>
              <div className="row">
                <div className="container jumbotron_text sub_text">
                  Thousands of companies and professionals use Elevtor to find their match between experts and business
                </div>
              </div>
            </div>
            <div className="col-xs-4 col-xs-offset-1 col-sm-4 com-sm-offset-1 col-md-3 col-md-offset-1 search_container center_align">
              <div className="row">
                <input type="text" className="search_forms" id="job_title" placeholder="Job Title" />
              </div>
              <div className="row">
                <input type="text" className="search_forms" id="location" placeholder="Location" />
              </div>
              <div className="row">
                <button className="search_button">
                  <span className="search_button_text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
