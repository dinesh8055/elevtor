import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 footer_info">
              <Link to="/">
                <img src="assets/Elevtor_Footer.png" alt="Elevtor Logo" id="footer_logo" />
              </Link>
              <p className="footer_logo_text">One search to end all searches, Elevtor, Going Up!</p>
            </div>

            <div className="col-xs-2 col-xs-offset-2 col-sm-2 col-sm-offset-2 col-md-2 col-md-offset-2">
              <p className="footer_col">Company</p>
              <p className="footer_col_options"><Link to="/">About us</Link></p>
              <p className="footer_col_options"><Link to="/">Work with us</Link></p>
              <p className="footer_col_options"><Link to="/">Blog</Link></p>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2">
              <p className="footer_col help">Help</p>
              <p className="footer_col_options footer_col_2"><Link to="/">FAQ</Link></p>
              <p className="footer_col_options footer_col_2"><Link to="/">Contact</Link></p>
              <p className="footer_col_options footer_col_2"><Link to="/">Privacy</Link></p>
              <p className="footer_col_options footer_col_2"><Link to="/">Security</Link></p>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2">
              <p className="footer_col">Social Networks</p>
              <p className="footer_col_options"> <Link to="/"><img src="assets/footer_facebook.png" alt="Facebook Logo" className="social_media_icons" /> Facebook</Link></p>
              <p className="footer_col_options"> <Link to="/"><img src="assets/footer_instagram.png" alt="Instagram Logo" className="social_media_icons" /> Instagram</Link></p>
              <p className="footer_col_options"> <Link to="/"><img src="assets/footer_twitter.png" alt="Twitter Logo" className="social_media_icons" /> Twitter</Link></p>
              <p className="footer_col_options"> <Link to="/"><img src="assets/footer_linkedIn.png" alt="LinkedIn Logo" className="social_media_icons" /> LinkedIn</Link></p>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Footer;
