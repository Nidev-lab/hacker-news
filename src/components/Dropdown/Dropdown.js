import './dropdown.css'
import React from 'react'

const Dropdown = ({ handleSelectChange, filter }) => {
  if(!handleSelectChange){
    return null
  }

  return (
    <select name="technologies" id="technologies" className='dropdown-technologies col-12 col-md-3' onChange={handleSelectChange} data-testid="dropdown-tech" defaultValue={filter}>
      <option value="angular" >
        Angular
      </option>
      <option value="reactjs" >
        React
      </option>
      <option value="vuejs" >
        Vue
      </option>
    </select>
  );
};

export default Dropdown;
