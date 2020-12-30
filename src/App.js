// import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import customers from './data';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Header from './Header';
import Customers from './Customers';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(customers);
    console.log(users);
  }, [])

  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route 
            path="/customers"
            render={()=> {
              return <Customers users={users} />
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>

  );
}

export default App;
