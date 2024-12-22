import { arrayOf, object, func } from 'prop-types';
import ListItem from '../list-item';

const TaskList = ({ todos = [], handlerToogle, removeTaskFunc }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        return (
          <ListItem
            key={item.id}
            todo={item}
            toggleCheckbox={() => handlerToogle(item.id)}
            removeTaskFunc={() => removeTaskFunc(item.id)}
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
};

export default TaskList;
