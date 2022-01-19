import './dropdown.css'
import React from 'react'

const Dropdown = ({ handleSelectChange }) => {
  return (
    <select name="technologies" id="technologies" className='dropdown-technologies col-4' onChange={handleSelectChange}>
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
  );
};

export default Dropdown;
