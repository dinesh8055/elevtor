import React from 'react';

class SearchFilter extends React.Component {
  render() {
    return (
      <div>

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 results_structure2">
            <div className="row forgot">
              <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <h4 className="center_align padding_bot_half">Date Posted</h4>
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 pad_five_percent">
                <a href="#" className="font_size_em align_right" onclick="closeNav()">
                  <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-xs-offset-1 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1 col-lg-9 col-lg-offset-1">
                <div>
                  <input type="radio" id="24hours" className="radio_options" name="date_posted" value="24hours"/>
                  <label for="24hours"><span><span></span></span>24 hours</label>
                </div>
                <div>
                  <input type="radio" id="3days" className="radio_options" name="date_posted" value="3days"/>
                  <label for="3days"><span><span></span></span>3 days</label>
                </div>
                <div>
                  <input type="radio" id="7days" className="radio_options" name="date_posted" value="7days"/>
                  <label for="7days"><span><span></span></span>7 days</label>
                </div>
                <div>
                  <input type="radio" id="30days" className="radio_options" name="date_posted" value="30days"/>
                  <label for="30days"><span><span></span></span>30 days</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <h4 className="radio_head center_align">Distance</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-xs-offset-1 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1 col-lg-9 col-lg-offset-1">
                <div>
                  <input type="radio" id="5miles" className="radio_options" name="distance" value="5miles"/>
                  <label for="5miles"><span><span></span></span>5 miles</label>
                </div>
                <div>
                  <input type="radio" id="10miles" className="radio_options" name="distance" value="10miles"/>
                  <label for="10miles"><span><span></span></span>10 miles</label>
                </div>
                <div>
                  <input type="radio" id="25miles" className="radio_options" name="distance" value="25miles"/>
                  <label for="25miles"><span><span></span></span>25 miles</label>
                </div>
                <div>
                  <input type="radio" id="50miles" className="radio_options" name="distance" value="50miles"/>
                  <label for="50miles"><span><span></span></span>50 miles</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <h4 className="radio_head center_align">Annual Pay</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-xs-offset-1 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1 col-lg-9 col-lg-offset-1">
                <div>
                  <input type="radio" id="any" className="radio_options" name="annual_pay" value="any"/>
                  <label for="any"><span><span></span></span>Any</label>
                </div>
                <div>
                  <input type="radio" id="20000" className="radio_options" name="annual_pay" value="20000"/>
                  <label for="20000"><span><span></span></span>$20,000</label>
                </div>
                <div>
                  <input type="radio" id="40000" className="radio_options" name="annual_pay" value="40000"/>
                  <label for="40000"><span><span></span></span>$40,000</label>
                </div>
                <div>
                  <input type="radio" id="60000" className="radio_options" name="annual_pay" value="60000"/>
                  <label for="60000"><span><span></span></span>$60,000</label>
                </div>
                <div>
                  <input type="radio" id="80000" className="radio_options" name="annual_pay" value="80000"/>
                  <label for="80000"><span><span></span></span>$80,000</label>
                </div>
                <div>
                  <input type="radio" id="100000" className="radio_options" name="annual_pay" value="100000"/>
                  <label for="100000"><span><span></span></span>$100,000</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <h4 className="radio_head center_align">Employment</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-xs-offset-1 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1 col-lg-9 col-lg-offset-1">
                <div>
                  <input type="radio" id="full_time" className="radio_options" name="employment" value="full_time"/>
                  <label for="full_time"><span><span></span></span>Full time</label>
                </div>
                <div>
                  <input type="radio" id="part_time" className="radio_options" name="employment" value="part_time"/>
                  <label for="part_time"><span><span></span></span>Part time</label>
                </div>
                <div>
                  <input type="radio" id="contract_hire" className="radio_options" name="employment" value="contract_hire"/>
                  <label for="contract_hire"><span><span></span></span>Contract to hire</label>
                </div>
                <div>
                  <input type="radio" id="cofounder" className="radio_options" name="employment" value="cofounder"/>
                  <label for="cofounder"><span><span></span></span>Co-founder</label>
                </div>
                <div>
                  <input type="radio" id="intern" className="radio_options" name="employment" value="intern"/>
                  <label for="intern"><span><span></span></span>Intern</label>
                </div>
              </div>
            </div>

            <div className="row padtop">
              <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                <div className="row center_align pad_bot_em">
                  <button className="results_save_button">
                    <span className="results_save_button_text">Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

      </div>
    )
  }
}

export default SearchFilter;
