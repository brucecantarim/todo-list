import React, { useRef, useContext } from 'react';
import styles from './ListHeader.module.css';
import { Trash } from 'react-feather';
import { TodoDispatchContext } from '../store/provider';
import { deleteTodos } from '../store/actions';

export interface ListHeaderProps {
  name: string;
  button?: boolean;
  callback?: () => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({ name, button }) => {
  const dialogRef = useRef<React.LegacyRef<HTMLDialogElement>>(null);
  const dispatch = useContext(TodoDispatchContext);

  const handleDeleteAllTasks = () => {
    dispatch && deleteTodos(dispatch);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={!button && styles.underline}>{name}</h2>
        {button && <button className={styles.button} onClick={() => dialogRef?.current?.showModal()}>
          <Trash />
          Delete all tasks
        </button>}
      </div>
      <dialog ref={dialogRef} className={styles.dialog}>
        <form method='dialog'>
          Are you sure?
          <div className={styles.actions} >
            <button className={styles.cancel} onClick={() => dialogRef?.current?.close()}>Cancel</button>
            <button className={styles.confirm} onClick={handleDeleteAllTasks}>Confirm</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ListHeader
