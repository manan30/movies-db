import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
