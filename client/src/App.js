import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Blue from './components/layout/Blue';
import HUD from './components/HUD/HUD';
import Banner from './components/layout/Landing';

const App = () =>{

  return (
    <Router>
    <Fragment>
      <HUD/>
      <Banner/>
      <div className="container bg-yelo">
      <h1 className="test">
        hello
      </h1>
      <Switch>
        <Route exact path ="/blue" component={Blue}/>
      </Switch>
      </div>

    </Fragment>
    </Router>
  )

}

export default App;
