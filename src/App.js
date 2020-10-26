import React, { useState, useEffect } from 'react';
import DropDownMenu from './Components/DropDownMenu.js';
import LoginForm from './Components/LoginForm.js';


const App = () => {
   return (
     <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center'}}>
       <LoginForm></LoginForm>
     </div>
    );
}

export default App