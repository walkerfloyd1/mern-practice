import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todos.component";
import TodosList from './components/todos-list.component';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="container">
      <h2>MERN Stack Todo App</h2>
      <Route path="/home" component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </div>
    </Router>
  );
  }
}

export default App;
