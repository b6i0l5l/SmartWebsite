import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm.js';
import Core from './Components/Core.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FindDevices from './Components/FindDevices.js';


const App = () => {
   return (
     <Router>
       <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center'}}>
        <Switch>
          <Route path='/' exact component={LoginForm}></Route>
          <Route path="/core" exact component={Core}></Route>
          <Route path='/finddevices' exact component={FindDevices}></Route>
        </Switch>
      </div>
     </Router> 
    );
}

export default App