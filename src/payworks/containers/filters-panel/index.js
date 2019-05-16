import React from 'react';

import './styles.css';

const FiltersPanel = ({ children }) => {
  return (
    <div className="filters-panel">
      {children}
    </div>
  );
}

export default FiltersPanel;