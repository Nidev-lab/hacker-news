import './header.css';
import React from 'react';
import logo from '../../assets/img/hacker-news.svg';

const Header = () => {
  return (
    <header className='container shadow-header'>
      <img src={logo} alt="logo-hacker-news" className='padding-logo'/>
    </header>
  )
}

export default Header;
