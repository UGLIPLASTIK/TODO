import { object, func } from 'prop-types';

const ListItem = ({ todo, toggleCheckbox, removeTaskFunc }) => {

  return (
    <li className={todo.status}>
      <div className='view'>
        <input onChange={toggleCheckbox} type='checkbox' className='toggle'/>
        <label>
          <span className='description'>{todo.text}</span>
          <span className='created'>created 5 minutes ago</span>
        </label>
        <button className='icon icon-edit'></button>
        <button onClick={removeTaskFunc} className='icon icon-destroy'></button>
      </div>
      {/* <input type='text' className='edit' value={todo.text}/> */}
    </li>
  )
}

ListItem.propTypes = {
  todo: object,
  toggleCheckbox: func,
  removeTaskFunc: func,
}

export default ListItem