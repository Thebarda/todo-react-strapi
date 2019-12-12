import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { mapDispatchToProps } from "../bindActions";
import { connect } from "react-redux";
import CreateTodo from "./CreateTodoForm";

/* const TodoListContainer = ({
  todos,
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
}) => {
  useEffect(() => {
    getTodos();
  }, []); // eslint-disable-line

  const handleTodoClick = todo => {
    todo.notCompleted = !todo.notCompleted;
    updateTodo(todo).then(() => {
      getTodos(true);
    });
  };

  const handleDeleteTodo = id => {
    deleteTodo(id).then(() => {
      getTodos(true);
    });
  };

  let content;
  if (todos.pending) {
    content = <p>Loading...</p>;
  } else if (todos.error) {
    content = <p style={{ color: "red" }}>There is an error</p>;
  } else {
    content = (
      <TodoList
        todos={todos.todos}
        onTodoClick={handleTodoClick}
        onDeleteTodo={handleDeleteTodo}
      />
    );
  }

  return (
    <>
      <h1>Add Todo</h1>
      <CreateTodo addTodo={addTodo} getTodos={getTodos} />
      <h1>Todos</h1>
      {content}
    </>
  );
}; */

class TodoListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getTodos();
  }

  handleTodoClick = todo => {
    todo.notCompleted = !todo.notCompleted;
    this.props.updateTodo(todo).then(() => {
      this.props.getTodos(true);
    });
  };

  handleDeleteTodo = id => {
    this.props.deleteTodo(id).then(() => {
      this.props.getTodos(true);
    });
  };

  render() {
    const { todos } = this.props;
    let content;
    if (todos.pending) {
      content = <p>Loading...</p>;
    } else if (todos.error) {
      content = <p style={{ color: "red" }}>There is an error</p>;
    } else {
      content = (
        <TodoList
          todos={todos.todos}
          onTodoClick={this.handleTodoClick}
          onDeleteTodo={this.handleDeleteTodo}
        />
      );
    }

    return (
      <>
        <h1>Add Todo</h1>
        <CreateTodo
          addTodo={this.props.addTodo}
          getTodos={this.props.getTodos}
        />
        <h1>Todos</h1>
        {content}
      </>
    );
  }
}

TodoListContainer.propTypes = {
  todos: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
