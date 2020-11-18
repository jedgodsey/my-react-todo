import React from 'react';
import TodoModel from '../models/TodoModel'
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TodoModel.all().then(res => {
      this.setState({
        todos: res.todos
      })
    })
  }

  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false
    }
    TodoModel.create(newTodo).then(res => {
      let todos = this.state.todos;
      console.log('my response ', res)
      todos.push(res);
      this.setState({todos: todos})
    })
  }

  deleteTodo = (todo) => {
    TodoModel.delete(todo).then(res => {
      console.log('res within deleteTodo ', res)
      let todos = this.state.todos.filter(todo => {
      return todo._id !== res._id;
      })
      this.setState({todos})
    })
  }

  updateTodo = (todo) => {
    const isUpdatedTodo = thing => {
      return thing._id === todo._id
    }
    TodoModel.update(todo)
      .then(res => {
        let todos = this.state.todos;
        todos.find(isUpdatedTodo).body = todo.body;
        this.setState({ todos })
      })
  }
 
  render() {
    return (
      <div className="todosComponent">
        <h1>TodosContainer rendering</h1>
        <CreateTodoForm createTodo={this.createTodo} />
        <Todos 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          updateTodo={this.updateTodo}
        />
      </div>
    )
  }
}

export default TodosContainer;
