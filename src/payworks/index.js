import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import OrganizationRepos from './containers/organization-repos';
import BranchesDetail from './containers/branches-detail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={OrganizationRepos} />
            <Route exact path='/branches' component={BranchesDetail} />
            <Route render={() => (<p>Not Found</p>)} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;