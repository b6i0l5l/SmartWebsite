import React from 'react';
import DevicesMenu from './DevicesMenu.js';
import { useLocation } from "react-router-dom";

const FindDevices = () => {
   return (
     <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center'}}>
       <DevicesMenu></DevicesMenu>
     </div>
    );
}

export default FindDevices