import React, { useContext, useState } from 'react';
import { TodoDispatchContext } from '../store/provider';
import { setFilter } from '../store/actions';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch && dispatch(setFilter(value));
  };

  return (
    <input className={styles.input} type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
  );
};

export default SearchBox;

