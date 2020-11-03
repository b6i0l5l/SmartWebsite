import React, { useState , useEffect} from 'react';
import CommandForm from './CommandForm.js';
import GetApi from './GetApi';
import {useLocation} from 'react-router-dom';

const DropDownMenu = () => {
  const [devices] = useState([
    { label: "plug1", value: "plug1"},
    { label: "plug2", value: "plug2" },
    { label: "plug3", value: "plug3" }
  ]);
  const [states, setState] = useState({
    device:'plug1',
    command:'',
    username:''
  });

  const location = useLocation();
  
  useEffect(() => {
    async function fectchCommand(){
      const getCommandByDeviceID = await GetApi.getCommandByDeviceID(location.state['username'], states['device']);
      setState(states => ({ ...states, username:location.state['username'], command:getCommandByDeviceID['command']}));
    }
    fectchCommand();
}, []);
  
   const handleChange = async (e) => {
    const getCommandByDeviceID = await GetApi.getCommandByDeviceID(location.state['username'], e.target.value);
    setState(states => ({ ...states, device: getCommandByDeviceID['device'] ,command:getCommandByDeviceID['command']}))
  }
  
  return (
    <div>
      <p style={{fontSize:'28px'}}>The Device:</p>
      <select style={{width:'500px', height:'50px', fontSize:'28px'}}
       onChange={e => handleChange(e)}>
        {devices.map(device => (
          <option
            key={device.value}
            value={device.value}
          >
            {device.value}
          </option>
        ))}
      </select>
      <CommandForm value={states}></CommandForm>
    </div>
    
  );
}

export default DropDownMenu