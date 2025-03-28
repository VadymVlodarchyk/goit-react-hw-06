import React from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (<div className={css.blockLabel}><label>Find contacts by name</label>
    <input
      className={css.input}
      type="text"
      placeholder=""
      onChange={handleChange}
    /></div>
    
  );
};

export default SearchBox;
