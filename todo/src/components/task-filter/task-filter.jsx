import { func } from 'prop-types';

const TasksFilter = ({ filterFunc }) => {
  return (
    <ul className="filters" onClick={filterFunc}>
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>completed</button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  filterFunc: func.isRequired,
};

export default TasksFilter;
