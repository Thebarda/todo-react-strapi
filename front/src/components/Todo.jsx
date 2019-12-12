import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, isCompleted, name, handleDelete }) => (
  <li>
    {name} <span><input type="checkbox" checked={isCompleted} onChange={onClick} /></span>{' '}<button onClick={handleDelete}>Remove</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo