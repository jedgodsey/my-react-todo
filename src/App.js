import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <h1>react 1</h1>
      {routes}
    </div>
  );
}

export default App;
