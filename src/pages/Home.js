import './home.css';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import InputRadio from '../components/InputRadio/InputRadio';

const Home = () => {
  
  const [hits, setHits] = useState([])
  const [filter, setFilter] = useState('angular')
  const [page, setPage] = useState(0)
  const [pageQuantity, setpageQuantity] = useState(0)
  const [isFav, setIsFav] = useState(true)

  const handleSelectChange = (e) => {
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
  }, [filter, page])

  return (
    <>
      <Header />
      <InputRadio setIsFav={setIsFav}/>
      <main className='container'>
        <select name="cars" id="cars" className='dropdown-technologies col-4' onChange={handleSelectChange}>
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
            isFav
              ? hits.map((data, i) => <Card data={data} key={i}/>)
              : <p>Hola</p>
          }
        </div>
        <Pagination pageQuantity={pageQuantity} setPage={setPage}/>
      </main>
    </>
  )
}

export default Home;
