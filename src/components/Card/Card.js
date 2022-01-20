import './card.css'
import React from 'react'
import clock from '../../assets/icons/clock.svg'
import favempty from '../../assets/icons/favempty.svg'
import favfull from '../../assets/icons/favfull.svg'

const Card = ({ data, favorite }) => {

  const handleFavClick = info => {
    let existingFavs = JSON.parse(localStorage.getItem("myFavs")) || []
    let newFavs

    existingFavs.push(info)
    newFavs = existingFavs

    localStorage.setItem("myFavs", JSON.stringify(newFavs))
  }

  return (
    <div className='container-cards'>
      {
        data.map((info, i) => {
          if (!info.story_url || !info.created_at || !info.author || !info.story_title) {
            return null
          }
          return (
            <div className='card col-12 col-md-6 col-lg-6' key={i}>
              <a href={info.story_url} target='_blank' rel="noreferrer">
                <div className='info-box'>
                  <div className='position-time-news'>
                    <img src={clock} alt="clock-card" />
                    <p className='font-time-news'>{info.created_at} {info.author}</p>
                  </div>
                  <p className='font-description-news' data-testid="data-title">{info.story_title}</p>
                </div>
              </a>
              <div className='favorite-box'>
                <img src={favorite.some(({ objectID }) => objectID === info.objectID) ? favfull : favempty} alt="fav-icon" onClick={() => handleFavClick(info)} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card;