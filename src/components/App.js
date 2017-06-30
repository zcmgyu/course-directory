import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Component
import Header from './Header'
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'
import Featured from './Featured'
import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;