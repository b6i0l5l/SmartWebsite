import React, { useState, useEffect } from 'react';
import LoginForm from './Components/Login.js';
import Core from './Components/Core.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DevicesAndCommands from './Components/DevicesAndCommands.js';


const App = () => {
   return (
     <Router>
       <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center'}}>
        <Route path='/' exact component={LoginForm}></Route>
        <Route path='/devicesandcommands' exact component={DevicesAndCommands}></Route>
        <Route path="/core" exact component={Core}></Route>
      </div>
     </Router> 
    );
}

export default App