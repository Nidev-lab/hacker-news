import './pagination.css'
import React, { useState } from 'react';

const Pagination = ({ pageQuantity, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  if (!pageQuantity) {
    return null
  }

  return (
    <div className='position-pagination'>
      <a className='primary-button' href={`#${currentPage}`} onClick={() => setCurrentPage(currentPage - 11 > 1 ?currentPage - 11 : 1)}>{'<'}</a>
      <div className='style-pagination' data-testid="pagination-test">
        {[...Array(pageQuantity)].map((x, i) =>
          <button className='primary-button' onClick={() => setPage(i)} key={i} id={i+1}>{i+1}</button>
        )}
      </div>
      <a className='primary-button' href={`#${currentPage}`} onClick={() => setCurrentPage(currentPage + 11 < pageQuantity ? currentPage + 11 : pageQuantity )}>{'>'}</a>
    </div>
  )
};

export default Pagination;
