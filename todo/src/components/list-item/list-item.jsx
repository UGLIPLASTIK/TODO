import { object, func } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';

const ListItem = ({ todo, toggleCheckbox, removeTaskFunc }) => {
  const [createdTime, setCreatedTime] = useState(
    formatDistanceToNow(todo.time, { includeSeconds: true }),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCreatedTime(formatDistanceToNow(todo.time, { includeSeconds: true }));
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <li className={todo.status}>
      <div className="view">
        <input onChange={toggleCheckbox} type="checkbox" className="toggle" />
        <label>
          <span className="description">{todo.text}</span>
          <span className="created">
            {todo.time
              ? `created ${createdTime} ago`
              : 'time of creation unknown'}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={removeTaskFunc} className="icon icon-destroy"></button>
      </div>
      {/* <input type='text' className='edit' value={todo.text}/> */}
    </li>
  );
};

ListItem.propTypes = {
  todo: object,
  toggleCheckbox: func,
  removeTaskFunc: func,
};

export default ListItem;
