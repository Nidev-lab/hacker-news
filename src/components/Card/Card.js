import './card.css';
import React from 'react';
import clock from '../../assets/icons/clock.svg';
import favempty from '../../assets/icons/favempty.svg'

const Card = () => {
  return (
    <div className='container-cards'>
      <div className='card col-12 col-md-6 col-lg-6'>
        <div className='info-box'>
          <div className='position-time-news'>
            <img src={clock} alt="clock-card" />
            <p className='font-time-news'>3 hours ago by author</p>
          </div>
          <p className='font-description-news'>Yes, React is taking over front-end development. The question is why.</p>
        </div>
        <div className='favorite-box'>
          <img src={favempty} alt="" />
        </div>
      </div>
      <div className='card col-12 col-md-6 col-lg-6'>
        <div className='info-box'>
          <div className='position-time-news'>
            <img src={clock} alt="clock-card" />
            <p className='font-time-news'>3 hours ago by author</p>
          </div>
          <p className='font-description-news'>Yes, React is taking over front-end development. The question is why.</p>
        </div>
        <div className='favorite-box'>
          <img src={favempty} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card;