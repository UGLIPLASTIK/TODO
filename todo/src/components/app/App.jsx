import './App.css';
import React from 'react';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import TasksFilter from '../task-filter';
import { useState } from 'react';

function App() {
  const testTodos = [
    {
      text: 'Complited task',
      time: new Date(),
      status: 'active',
      id: 1,
    },
    {
      text: 'Editing task',
      time: new Date(),
      status: 'active',
      id: 2,
    },
    {
      text: 'Active task',
      time: new Date(),
      status: 'active',
      id: 3,
    },
  ];

  const [data, setData] = useState(testTodos);
  const [filter, setFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [editing, setEditing] = useState(false);

  const handlerToogle = (id) => {
    const updatedTodos = data.map((todo) =>
      todo.id === id ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } : todo
    );
    setData(updatedTodos);
  };

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!formData.get('task')) return alert('Please, add the task');
    const task = {
      text: formData.get('task'),
      time: new Date(),
      status: 'active',
      id: Date.now(),
    };
    e.target.reset();
    const newData = [...data, task];
    setData(newData);
  };

  const removeTask = (id) => {
    const updateData = data.filter((task) => task.id != id);
    setData(updateData);
  };

  const clearList = () => {
    const newState = data.filter((task) => task.status != 'completed');
    setData(newState);
  };

  const filterTasks = (e) => {
    let filterButtons = [...e.currentTarget.childNodes];
    filterButtons = filterButtons.map((el) => {
      return el.firstElementChild;
    });
    for (let btn of filterButtons) {
      btn.classList.remove('selected');
    }
    e.target.classList.add('selected');
    const filterStatus = e.target.textContent.toLowerCase();
    setFilter(filterStatus === 'all' ? false : filterStatus);
    setFilteredData(data.filter((task) => task.status === filterStatus));
  };

  const openEditTaskFunc = (id) => {
    const updatedTodos = data.map((todo) => (todo.id === id ? { ...todo, status: 'editing' } : todo));
    setEditing((prev) => !prev);
    setData(updatedTodos);
  };

  const saveChangesFunc = (inputValue, id) => {
    console.log(inputValue, id);
    const updatedTodos = data.map((todo) => (todo.id === id ? { ...todo, text: inputValue, status: 'active' } : todo));
    setEditing((prev) => !prev);
    setData(updatedTodos);
  };

  const countValue = data.filter((task) => task.status === 'active');

  return (
    <section className="todoapp">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          todos={filter ? filteredData : data}
          handlerToogle={handlerToogle}
          removeTaskFunc={removeTask}
          editTaskFunc={!editing ? openEditTaskFunc : () => null}
          saveChangesFunc={saveChangesFunc}
        />
        <Footer count={countValue.length} clearFunc={clearList}>
          <TasksFilter filterFunc={filterTasks} />
        </Footer>
      </section>
    </section>
  );
}

export default App;
