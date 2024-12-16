import './App.css'
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import TasksFilter from '../task-filter';
import { useState } from 'react';

function App() {

  const testTodos = [
    {
      text: 'Complited task',
      time: null,
      status: 'active',
      id: 1,
    },
    {
      text: 'Editing task',
      time: null,
      status: 'active',
      id: 2,
    },
    {
      text: 'Active task',
      time: null,
      status: 'active',
      id: 3,
    }
  ]

  const [data, setData] = useState(testTodos);

  const handlerToogle = (id) => {
    const updatedTodos = data.map(todo => 
    todo.id === id ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } : todo
    );
    setData(updatedTodos);
  }

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = {
      text: formData.get('task'),
      time: null,
      status: 'active',
      id: Date.now(),
    }
    e.target.reset()
    const newData = [ ...data, task]
    setData(newData)
  }

  const removeTask = (id) => {
    console.log(id);
    const updateData = data.filter(task => task.id != id)
    setData(updateData)
  }

  return (
    <section className='todoapp'>
      <h1>todos</h1>
      <NewTaskForm addTask={addTask}/>
      <section className='main'>
        <TaskList todos={data}
                  handlerToogle={handlerToogle}
                  removeTaskFunc={removeTask}/>
        <Footer count={data.length}>
          <TasksFilter/>
        </Footer>
      </section>
    </section>
  )
}

export default App
