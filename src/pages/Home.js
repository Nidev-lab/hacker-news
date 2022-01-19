import './home.css';
import React, { useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

const Home = () => {
  
  const [hits, setHits] = useState([])

  const handleChange = (e) => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${e.target.value}&page=0`)
      .then(resp => resp.json())
      .then(json => setHits(json.hits))
  }

  return (
    <>
      <Header />
      <main className='container'>
        <select name="cars" id="cars" className='dropdown-technologies col-4' onChange={handleChange}>
          <option value="angular">
            Angular
          </option>
          <option value="reactjs">
            React
          </option>
          <option value="vuejs">
            Vue
          </option>
        </select>
        <div className='container-cards'>
          {
            hits.map(data => <Card data={data}/>)
          }
        </div>
      </main>
    </>
  )
}

export default Home;
