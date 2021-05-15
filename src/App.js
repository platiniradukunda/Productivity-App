import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/todolist" component={TodoList} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
