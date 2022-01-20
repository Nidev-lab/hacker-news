import './pagination.css'
import React from 'react';

const Pagination = ({ pageQuantity, setPage }) => {
  if (!pageQuantity) {
    return null
  }

  return (
    <div className='position-pagination' data-testid="pagination-test">
      {[...Array(pageQuantity)].map((x, i) =>
        <button className='primary-button' onClick={() => setPage(i)} key={i}>{i}</button>
      )}
    </div>
  )
};

export default Pagination;
