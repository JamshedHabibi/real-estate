import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import PropertyPage from './components/PropertyPage';
import {Route, Switch} from 'react-router-dom';

export default class App extends React.Component {
    render() {
      return (
        <React.Fragment>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/properties' component={PropertyPage}/>
            </Switch>
            <Navbar/>
        </React.Fragment>
      )
    }
  }