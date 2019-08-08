import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="container">
      <h2>MERN Stack Todo App</h2>
    </div>
    <Route path="/" component={TodosList} />
    <Route path="/edit/:id" component={EditTodo} />
    <Route path="/create" component={CreateTodo} />
    </Router>
  );
  }
}

export default App;
