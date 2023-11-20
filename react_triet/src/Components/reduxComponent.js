// ReduxComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions';
import { Link } from 'react-router-dom';

const ReduxComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo('New Todo'));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {/* Use todo.id as the key */}
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <Link to="/redux-thunk">
        <button>Go to Redux Thunk</button>
      </Link>
    </div>
  );
};

export default ReduxComponent;
