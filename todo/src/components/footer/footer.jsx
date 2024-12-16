import { number ,element } from 'prop-types';

const Footer = ({ children, count }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      { children }
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  count: number,
  children: element,
};

export default Footer;
