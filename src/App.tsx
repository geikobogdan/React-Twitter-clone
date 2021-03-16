import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
         <Route path="/" component={Home} /> 
      </Switch>
    </div>
  );
}

export default App;


