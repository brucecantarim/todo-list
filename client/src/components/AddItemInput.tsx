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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (dispatch && inputValue) {
      createTodo(dispatch, inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input value={inputValue} onChange={(event) => handleChange(event.target.value)} placeholder="New task..." />
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddItemInput;

