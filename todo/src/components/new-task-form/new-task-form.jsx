import { func } from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        name="task"
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: func.isRequired,
};

export default NewTaskForm;
