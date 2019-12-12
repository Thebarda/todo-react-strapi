import React, { useState } from 'react'
import PropTypes from 'prop-types'

/* const CreateTodo = ({ addTodo, getTodos }) => {
  const [input, setInput] = useState('')

  const handleAddTodo = () => {
    addTodo(input).then(() => {
      getTodos(true)
    })
  }

  return (
    <>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={() => {
        if (input) {
          handleAddTodo(input)
          setInput('')
        }
      }}>Go !</button>
    </>
  )
} */

class CreateTodo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleAddTodo = () => {
    const { addTodo, getTodos } = this.props
    addTodo(this.state.input).then(() => {
      getTodos(true)
    })
  }

  render() {
    const { input } = this.state
    return (
      <>
        <input value={input} onChange={event => this.setState({ input: event.target.value })} />
        <button type="submit" onClick={() => {
          if (input) {
            this.handleAddTodo(input)
            this.setState({ input: '' })
          }
        }}>Go !</button>
      </>
    )
  }
}

CreateTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired
}

export default CreateTodo;