import './pagination.css'
import React from 'react';

const Pagination = ({ pageQuantity, setPage }) => {
  return (
    <div className='position-pagination'>
      {[...Array(pageQuantity)].map((x, i) =>
        <button className='primary-button' onClick={() => setPage(i)} key={i}>{i}</button>
      )}
    </div>
  )
};

export default Pagination;
