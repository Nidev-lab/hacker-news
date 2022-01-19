import './inputradio.css'
import React from 'react'

const InputRadio = ({ setIsFav }) => {
  return (
    <div className='position-input-radio'>
      <div class="wrapper">
        <input type="radio" name="select" id="option-1" onChange={() => setIsFav(true)}/>
        <input type="radio" name="select" id="option-2" onChange={() => setIsFav(false)}/>
        <label for="option-1" class="option option-1">
          <span>All</span>
        </label>
        <label for="option-2" class="option option-2">
          <span>My Faves</span>
        </label>
      </div>
    </div>
  );
};

export default InputRadio
