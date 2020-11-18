import React from  'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <nav>
        <h1>ToDo</h1>
        <Link to='/'>Home</Link>
        <Link to='/todos'>Todo List</Link>
      </nav>
    </header>
  )
}

export default Header;
