import './list-item.css';
import { object, func, string } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';

const ListItem = ({ todo, toggleCheckbox, removeTaskFunc, status, editTaskFunk, saveChangesFunc }) => {
  const [createdTime, setCreatedTime] = useState(formatDistanceToNow(todo.time, { includeSeconds: true }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCreatedTime(formatDistanceToNow(todo.time, { includeSeconds: true }));
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const [inputValue, setInputValue] = useState(todo.text);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDownInput = (e) => {
    if (e.keyCode === 13) {
      saveChangesFunc(inputValue);
    }
  };

  return (
    <li className={todo.status}>
      <div className="view">
        <input
          onChange={toggleCheckbox}
          type="checkbox"
          className="toggle"
          checked={status === 'active' ? false : true}
        />
        <label>
          <span className="description">{todo.text}</span>
          <span className="created">{todo.time ? `created ${createdTime} ago` : 'time of creation unknown'}</span>
        </label>
        <button onClick={editTaskFunk} className="icon icon-edit"></button>
        <button onClick={removeTaskFunc} className="icon icon-destroy"></button>
      </div>
      <input onKeyDown={onKeyDownInput} onChange={onChangeInput} type="text" className="edit" value={inputValue} />
    </li>
  );
};

ListItem.propTypes = {
  todo: object,
  toggleCheckbox: func,
  removeTaskFunc: func,
  editTaskFunk: func,
  status: string,
};

export default ListItem;
