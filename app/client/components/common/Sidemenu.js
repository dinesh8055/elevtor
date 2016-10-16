import React from 'react';
import { Link } from 'react-router';

class Sidemenu extends React.Component {
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidebar-nav">
          <a href="#" className="font_size_em align_right" onclick="closeNav()">
            <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> Close
          </a>
          <Link to="/createresume" activeClassName="active">Update Resume</Link>
          <Link to="/savedjobs" activeClassName="active">Saved Jobs</Link>
          <Link to="/interviews" activeClassName="active">Interviews</Link>
          <Link to="/profile" className="active_menu" activeClassName="active">Profile</Link>
        </div>

        <div className="side_menu_button">
          <span onclick="openNav()">
            <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> Menu
          </span>
        </div>
      </div>
    )
  }
}

export default Sidemenu;
