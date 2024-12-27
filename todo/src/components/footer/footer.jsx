import './footer.css';
import React from 'react';
import { number, element, func } from 'prop-types';

const Footer = ({ children, count = 0, clearFunc }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      {children}
      <button className="clear-completed" onClick={clearFunc}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  count: number,
  children: element.isRequired,
  clearFunc: func.isRequired,
};

export default Footer;
