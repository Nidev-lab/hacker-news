import './home.css';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import InputRadio from '../components/InputRadio/InputRadio';

const Home = () => {
  let favs = JSON.parse(localStorage.getItem('myFavs'))
  
  const [hits, setHits] = useState([])
  const [filter, setFilter] = useState('')
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
        setHits(json.hits)
        setpageQuantity(json.nbPages)
      })
  }, [filter, page])

  console.log(favs);
  
  return (
    <>
      <Header />
      <InputRadio setIsFav={setIsFav} isFav={isFav}/>
      <main className='container'>
        <select name="technologies" id="technologies" className='dropdown-technologies col-4' onChange={handleSelectChange}>
          <option value=''>
            Choose an option
          </option>
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
        {
          filter 
            ? <div className='container-cards'>
                {
                  isFav
                    ? hits.map((data, i) => <Card data={data} key={i} favorite={favs ? favs.some(({ objectID }) => objectID === data.objectID) : false}  />)
                    : favs.map((data, i) => <Card data={data} key={i} favorite={true} />)
                }
              </div>
            : <p>Choose an option to continue</p>
        }
        <Pagination pageQuantity={pageQuantity} setPage={setPage}/>
      </main>
    </>
  )
}

export default Home;
