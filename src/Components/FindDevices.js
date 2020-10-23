import React, { useState, useEffect } from 'react';
import DropDownMenu from './Components/DropDownMenu.js';
import CommandForm from './Components/CommandForm.js';


const FindDevices = () => {
   return (
     <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center'}}>
       <DropDownMenu></DropDownMenu>
       <CommandForm></CommandForm>
     </div>
    );
}

export default FindDevices