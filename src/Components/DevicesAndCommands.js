import React from 'react';
import DevicesMenu from './DevicesMenu.js';
import LogOut from './LogOut.js';

const DevicesAndCommands = () => {
    return (
      <div style={{ color:'white', minHeight: '100vh', backgroundColor:'#282c34', display:'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center'}}>
        <LogOut></LogOut>
        <DevicesMenu></DevicesMenu>
      </div>
    );
}

export default DevicesAndCommands