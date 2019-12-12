const GET_TODOS = "GET_TODOS";
const ADD_TODOS = "ADD_TODOS";
const UPDATE_TODOS = "UPDATE_TODOS";
const DELETE_TODOS = "DELETE_TODOS";

const API_URL = "http://localhost:1337/todos";

export function getTodos(noPending = false) {
  return (dispatch, getState) => {
    if (!noPending) {
      dispatch({
        type: GET_TODOS,
        status: "PENDING"
      });
    }
    return fetch(`${API_URL}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_TODOS,
          status: "SUCCESS",
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: GET_TODOS,
          status: "ERROR",
          payload: error
        });
      });
  };
}

export function addTodo(name) {
  return (dispatch, getState) => {
    return fetch(`${API_URL}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_TODOS,
          status: "SUCCESS",
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_TODOS,
          status: "ERROR",
          payload: error
        });
      });
  };
}

export function updateTodo(newTodo) {
  return (dispatch, getState) => {
    return fetch(`${API_URL}/${newTodo.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ ...newTodo })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: UPDATE_TODOS,
          status: "SUCCESS",
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_TODOS,
          status: "ERROR",
          payload: error
        });
      });
  };
}

export function deleteTodo(id) {
  return (dispatch, getState) => {
    return fetch(`${API_URL}/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_TODOS,
          status: "SUCCESS",
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: DELETE_TODOS,
          status: "ERROR",
          payload: error
        });
      });
  };
}

const initialState = {
  todos: [],
  pending: false,
  error: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      if (action.status === "PENDING") {
        return {
          ...state,
          pending: true
        };
      } else if (action.status === "SUCCESS") {
        return {
          ...state,
          pending: false,
          todos: action.payload
        };
      } else if (action.status === "ERROR") {
        return {
          ...state,
          pending: false,
          error: action.payload
        };
      }
      return state;
    }
    case ADD_TODOS:
    case UPDATE_TODOS:
    case DELETE_TODOS: {
      if (action.status === "ERROR") {
        return {
          ...state,
          pending: false,
          error: action.payload
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default todoReducer;
