import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import Favorites from './Favorites'
import NotFound from './sharedComponents/NotFound'
import Footer from './sharedComponents/Footer';
import TopTemplates from './TopTemplates';
import BuildStatement from './BuildStatement';

export default function Main() {
  return (
    <>
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/createtemplate" component={BuildStatement} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/toptemplates" component={TopTemplates} />
        <Route exact path="/build-brand-statment" component={BuildStatement} />
        <Route exact path="/mybrandstatement/:id" component={Favorites} />
      </Switch>
    </>
  )
}
