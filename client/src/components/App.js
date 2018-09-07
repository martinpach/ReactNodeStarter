import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminLogin from './admin/login/AdminLogin';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/admin" component={AdminLogin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
