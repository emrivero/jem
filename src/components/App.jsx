import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './Main';
import Menu from './Menu';

const hello = () => <div>Hello</div>;

const App = () => (
  <Layout>
    <Router basename="/">
      <Menu />
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/configuration" component={hello} />
      </div>
    </Router>
  </Layout>
);

export default App;
