import './new-task-form.css';
import { func } from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  return (
    <form onSubmit={addTask}>
      <input type="text" name="task" className="todo-input task-input" placeholder="What needs to be done?" />
      <input type="number" name="time-min" className="todo-input time-input" placeholder="Min" />
      <input type="number" name="time-sec" className="todo-input time-input" placeholder="Sec" />
      <button style={{ display: 'none' }}>Add Task</button>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: func.isRequired,
};

export default NewTaskForm;
