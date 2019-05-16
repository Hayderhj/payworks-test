import React from 'react';

import './styles.css';

const BranchesGrid = ({branches = []}) => {
  if (!branches || branches.length === 0) { return null; }
  return (
  <ul className='branch-grid'>
    {branches.map((branch, i) => (
        <li key={i} className='grid-item'> 
          <div>{branch.name}</div>
        </li>
      )
    )}
  </ul>
)}

export default BranchesGrid