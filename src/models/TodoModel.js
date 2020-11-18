const endPoint = `https://super-crud.herokuapp.com/todos`;

class TodoModel {
  static all = () => {
    return fetch(endPoint).then(buffer => buffer.json()).then(data => data)
  }
  static create = (todo) => {
    return fetch(endPoint, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(error => console.log('error is ', error))
  }
  static delete = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, {
      method: 'DELETE'
    }).then(response => response.json())
  }
  static update = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(error => console.log('error is ', error))
  }
}

export default TodoModel;
