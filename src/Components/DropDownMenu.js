import React, { useState , useEffect} from 'react';
import CommandForm from './CommandForm.js';
import GetApi from './GetApi';
import {useLocation} from 'react-router-dom';
import DeviceForm from './DeviceForm.js';

const DropDownMenu = () => {
  const [devices, setDeviceState] = useState([]);
  const location = useLocation();
  
  const [states, setState] = useState({
    device:'plug1-on',
    command:'',
    username:''
  });

  useEffect(() => {
    async function fetchCommandsAndDevices(){
      const getCommandByDeviceID = await GetApi.getCommandsAndDevicesByUser(location.state['username']);
      setDeviceState(getCommandByDeviceID);
      
    }
    async function fetchCommands(){
      const getCommandByDeviceID = await GetApi.getCommandByDeviceID(location.state['username'], states['device']);
      console.log(getCommandByDeviceID);
      setState(states => ({ ...states, username:location.state['username'], command:getCommandByDeviceID['command']}));
    }
    fetchCommandsAndDevices();
    fetchCommands();
}, []);

const handleChange = async (e) => {
  const getCommandByDeviceID = await GetApi.getCommandByDeviceID(location.state['username'], e.target.value);
  setState(states => ({ ...states, username:location.state['username'], device:getCommandByDeviceID['device'] ,command:getCommandByDeviceID['command']}))
}
  
  return (
    <div>
      <p style={{fontSize:'28px'}}>The Device:</p>
      <select style={{width:'500px', height:'50px', fontSize:'28px'}}
       onChange={e => handleChange(e)}>
        {devices.map(device => (
          <option
            key={device['device']}
            value={device['device']}
          >
            {device['device']}
          </option>
        ))}
      </select>
      <CommandForm value={states}></CommandForm>
    </div>
    
  );
}

export default DropDownMenu