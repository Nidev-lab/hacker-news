import './home.css';
import React from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <select name="cars" id="cars" className='dropdown-technologies col-4'>
          <option value="volvo">
            Angular
          </option>
          <option value="saab">
              React
          </option>
          <option value="mercedes">
            Vue
          </option>
        </select>
        <Card />
      </main>
    </>
  )
}

export default Home;
