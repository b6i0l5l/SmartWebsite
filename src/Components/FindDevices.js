import React, { useState, useEffect } from 'react';
import DropDownMenu from './DropDownMenu.js';
import { useLocation } from "react-router-dom";

const FindDevices = () => {
  const location = useLocation();
  
   return (
     <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center'}}>
       <DropDownMenu></DropDownMenu>
     </div>
     
    );

}

export default FindDevices