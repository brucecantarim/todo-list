import { useState, useContext } from 'react';
import { TodoDispatchContext } from '../store/provider';
import { createTodo } from '../store/actions';
import styles from './AddItemInput.module.css';

const AddItemInput = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value: string): void => {
    setInputValue(value);
  };

  const handleClick = (): void => {
    if (dispatch && inputValue) {
      createTodo(dispatch, inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <input value={inputValue} onChange={(event) => handleChange(event.target.value)} />
      <button className={styles.button} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddItemInput;

