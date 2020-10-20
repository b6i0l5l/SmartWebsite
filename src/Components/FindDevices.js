import React, { useState, useEffect } from 'react';
import DropDownMenu from './DropDownMenu.js';

const FindDevices = () => {
   return (
     
     <div style={{ fontSize:'28px', padding:'0px',margin:'0px', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center'}}>
       <DropDownMenu></DropDownMenu>
     </div>
    );
}

export default FindDevices