import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick, onDeleteTodo }) => {
  if (!todos || todos.length === 0) {
    return <h2>There are no todos here</h2>;
  } else {
    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={!todo.notCompleted}
            onClick={() => onTodoClick(todo)}
            handleDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      notCompleted: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default TodoList;
