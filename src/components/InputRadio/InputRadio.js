import './inputradio.css'
import React from 'react'

const InputRadio = ({ setIsFav, isFav }) => {
  if(!setIsFav){
    return null
  }
  
  return (
    <div className='position-input-radio' data-testid="input-radio">
      <div className="wrapper">
        <input 
          type="radio" 
          name="select" 
          id="option-1" 
          onChange={() => setIsFav(true)} 
          checked={isFav}
          data-testid="option-1"
        />
        <input 
          type="radio" 
          name="select" 
          id="option-2" 
          onChange={() => setIsFav(false)} 
        />
        <label htmlFor="option-1" className="option option-1">
          <span>All</span>
        </label>
        <label htmlFor="option-2" className="option option-2">
          <span>My Faves</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio
