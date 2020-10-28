import React, { useState } from 'react';
import About from './About';
import Configuration from './Configuration';
import Hours from './Hours';
import Layout from './Layout';
import Main from './Main';
import Menu from './Menu';

const App = () => {
  const [path, setPath] = useState('/');
  const onChange = (link) => {
    setPath(link);
  };

  return (
    <Layout>
      <Menu onChange={onChange} />
      <Main display={path === '/'} />
      <Configuration display={path === '/configuration'} />
      <About display={path === '/about'} />
      <Hours display={path === '/hours'} />
    </Layout>
  );
};

export default App;
