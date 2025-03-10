import { useId } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ filterValue, onFilter }) => {
  const inputId = useId();

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={inputId}
        type="text"
        value={filterValue}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
