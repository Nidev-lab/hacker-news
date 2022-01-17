import './header.css';
import React from 'react';
import logo from '../../assets/img/hacker-news.svg';

const Header = () => {
  return (
    <div className='container shadow-header'>
      <img src={logo} alt="logo-hacker-news" className='padding-logo'/>
    </div>
  )
}

export default Header;
