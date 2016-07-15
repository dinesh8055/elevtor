import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Userlinks from './Userlinks';
import Info from './Info';
import Footer from './Footer';

const Landing = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
        <Userlinks />
        <Info />
        <Footer />
      </div>
    )
  }
})

export default Landing;
