import React from 'react';
import { Link } from 'react-router';
import Navbar from '../common/Navbar';
import Searchbar from './Searchbar';
import Userlinks from './Userlinks';
import Info from './Info';
import Footer from './Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Userlinks />
        <Info />
        <Footer />
      </div>
    )
  }
}

export default Landing;
