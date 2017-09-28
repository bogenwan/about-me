import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../src/Nav.jsx';
import Home from '../src/Home.jsx';
import AboutMe from '../src/AboutMe.jsx';
import ShowCase from '../src/ShowCase.jsx';
import ContactMe from '../src/ContactMe.jsx';

const App = (props) => (
      <div className="authed-app-layout">
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/show-case" component={ShowCase} />
            <Route path="/contact-me" component={ContactMe} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'));
