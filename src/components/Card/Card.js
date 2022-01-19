import './card.css';
import React from 'react';
import clock from '../../assets/icons/clock.svg';
import favempty from '../../assets/icons/favempty.svg'

const Card = ({ data }) => {
  if (!data.created_at || !data.author || !data.story_url || !data.story_title){
    return null
  }

  return (
    <div className='card col-12 col-md-6 col-lg-6'>
      <div className='info-box'>
        <div className='position-time-news'>
          <img src={clock} alt="clock-card" />
          <p className='font-time-news'>{data.created_at} {data.author}</p>
        </div>
        <a href={data.story_url}>
          <p className='font-description-news'>{data.story_title}</p>
        </a>
      </div>
      <div className='favorite-box'>
        <img src={favempty} alt="" />
      </div>
    </div>
  )
}

export default Card;