import React, { useState , useEffect} from 'react';
import CommandForm from './CommandForm.js';
import GetApi from './GetApi';

const DropDownMenu = (props) => {
  const [devices] = useState([
    { label: "plug1", value: "plug1"},
    { label: "plug2", value: "plug2" },
    { label: "plug3", value: "plug3" }
  ]);
  const [states, setState] = useState({
    device:'plug1',
    command:''
  });

  useEffect(() => {
    console.log(props);
    async function fectchCommand(){
      const getCommand = await GetApi.getCommand(props['value']['username'], states['device']);
      setState(states => ({ ...states, command:getCommand['command']}));
    }
    fectchCommand();
}, []);
  
   const handleChange = async (e) => {
    const getCommand = await GetApi.getCommand(props['value']['username'], e.target.value);
    setState(states => ({ ...states, device: getCommand['device'] ,command:getCommand['command']}))
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