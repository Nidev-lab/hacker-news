import './home.css'
import React from 'react'
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Card />
      </main>
    </>
  )
}

export default Home;
