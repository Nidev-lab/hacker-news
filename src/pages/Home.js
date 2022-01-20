import './home.css';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import InputRadio from '../components/InputRadio/InputRadio';
import Dropdown from '../components/Dropdown/Dropdown';

const Home = () => {
  let favs = JSON.parse(localStorage.getItem('myFavs'))
  
  const [hits, setHits] = useState([])
  const [filter, setFilter] = useState('angular')
  const [page, setPage] = useState(0)
  const [pageQuantity, setpageQuantity] = useState(0)
  const [isFav, setIsFav] = useState(true)

  const handleSelectChange = (e) => {
    setFilter(e.target.value)
    setPage(0)
    localStorage.setItem('filter', JSON.stringify(e.target.value))
  }

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`)
      .then(resp => resp.json())
      .then(json => {
        setHits(json.hits)
        setpageQuantity(json.nbPages)
      })
    }, [filter, page])
  
  return (
    <>
      <Header />
      <InputRadio setIsFav={setIsFav} isFav={isFav}/>
      <main className='container'>
        {
          isFav
          ? <>
              <Dropdown handleSelectChange={handleSelectChange} />
              <Card data={hits} />
              <Pagination pageQuantity={pageQuantity} setPage={setPage}/>
            </>
          : <>
              {
                favs 
                ? <Card data={favs || []} />
                : <p>You don't have favorites yet</p>
              }
            </> 
        }
      </main>
    </>
  )
}

export default Home;
