import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from 'Views';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/">
            <Home />
          </Route>
        </Suspense>
      </Switch>
    </div>
  </Router>
);

export default App;
