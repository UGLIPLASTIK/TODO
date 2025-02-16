import './task-list.css';
import { arrayOf, object, func } from 'prop-types';
import ListItem from '../list-item';

const TaskList = ({ todos = [], handlerToogle, removeTaskFunc, editTaskFunc, saveChangesFunc }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        return (
          <ListItem
            status={item.status}
            key={item.id}
            todo={item}
            toggleCheckbox={() => handlerToogle(item.id)}
            removeTaskFunc={() => removeTaskFunc(item.id)}
            editTaskFunk={() => editTaskFunc(item.id)}
            saveChangesFunc={(inputValue) => saveChangesFunc(inputValue, item.id)}
          />
        );
      })}
    </ul>
  );
};

TaskList.propTypes = {
  todos: arrayOf(object),
  handlerToogle: func.isRequired,
  removeTaskFunc: func.isRequired,
  editTaskFunc: func.isRequired,
  saveChangesFunc: func.isRequired,
};

export default TaskList;
