import './home.css';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  
  // const filter = localStorage.getItem("filter") || 'angular'
  const [hits, setHits] = useState([])
  const [filter, setFilter] = useState('angular')
  const [page, setPage] = useState(0)
  const [pageQuantity, setpageQuantity] = useState(0)

  const handleChange = (e) => {
    // console.log(e.target.value)
    // localStorage.setItem("filter", e.target.value)
    setFilter(e.target.value)
  }

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        setHits(json.hits)
        setpageQuantity(json.nbPages)
      })
  }, [filter, page]);

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
        <Pagination pageQuantity={pageQuantity} setPage={setPage}/>
      </main>
    </>
  )
}

export default Home;
