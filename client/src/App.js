import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CalendarView from './components/CalendarView';
import Assistant from './components/Assistant';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={TaskList} />
      <Route path="/task-form" component={TaskForm} />
      <Route path="/calendar" component={CalendarView} />
      <Route path="/assistant" component={Assistant} />
    </Switch>
  </Router>
);

export default App;
