import './card.css'
import React from 'react'
import clock from '../../assets/icons/clock.svg'
import favempty from '../../assets/icons/favempty.svg'
import favfull from '../../assets/icons/favfull.svg'

const Card = ({ data, favorite }) => {

  if (!data.created_at || !data.author || !data.story_url || !data.story_title){
    return null
  }

  const handleFavClick = data => {
    let existingFavs = JSON.parse(localStorage.getItem("myFavs")) || []
    let newFavs

    existingFavs.push(data)
    newFavs = existingFavs

    localStorage.setItem("myFavs", JSON.stringify(newFavs))
  }


  return (
    <div className='card col-12 col-md-6 col-lg-6'>
      <a href={data.story_url} target='_blank' rel="noreferrer">
        <div className='info-box'>
          <div className='position-time-news'>
            <img src={clock} alt="clock-card" />
            <p className='font-time-news'>{data.created_at} {data.author}</p>
          </div>
            <p className='font-description-news'>{data.story_title}</p>
        </div>
      </a>
      <div className='favorite-box'>
        <img src={favorite ? favfull : favempty} alt="fav-icon" onClick={() => handleFavClick(data)}/>
      </div>
    </div>
  )
}

export default Card;