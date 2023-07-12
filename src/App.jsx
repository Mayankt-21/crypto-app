import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


const App = () => {
  return (
      <div className='app'>

        <div className="navbar">
          Navbar
        </div>

        <div className="main">
          Main
        </div>

        <div className="footer">
          Footer
        </div>

      </div>
  )
};

export default App;
