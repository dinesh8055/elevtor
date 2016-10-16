import React from 'react';
import { Link } from 'react-router';

class Social extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row social_login_row">
          <div className="col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3">
            <div className="float_left">
              <button className="social_media_login linkedin">
                <img src="assets/linkedin_white.png" alt="LinkedIn Logo" className="social_login_icons float_left" />
                <span className="login_social_text center_align">Log in with LinkedIn</span>
              </button>
            </div>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2">
            <div className="center_align">
              <button className="social_media_login facebook">
                <img src="assets/facebook_white.png" alt="Facebook Logo" className="social_login_icons float_left" />
                <span className="login_social_text center_align">Log in with Facebook</span>
              </button>
            </div>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2">
            <div className="float_right">
              <button className="social_media_login twitter">
                <img src="assets/twitter_white.png" alt="Twitter Logo" className="social_login_icons float_left" />
                <span className="login_social_text center_align">Log in with Twitter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row social_login_row_b">
          <div className="col-xs-2 col-xs-offset-4 col-sm-2 col-sm-offset-4 col-md-2 col-md-offset-4">
            <div className="float_left">
              <button className="social_media_login google">
                <img src="assets/google_white.png" alt="Google Logo" className="social_login_icons float_left" />
                <span className="login_social_text center_align">Log in with Google</span>
              </button>
            </div>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2">
            <div className="float_right">
              <button className="social_media_login microsoft">
                <img src="assets/windows_white.png" alt="Microsoft Logo" className="social_login_icons float_left" />
                <span className="login_social_text center_align">Log in with Microsoft</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
