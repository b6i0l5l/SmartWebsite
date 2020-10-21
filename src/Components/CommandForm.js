import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import requestOptions from './RequestOptions';
import post from './PostApi';
import get from './GetApi';
const CommandForm = () => {
  const {register, handleSubmit} = useForm();
  const [command,setCommand] = useState('');
  const [device, setDevice] = useState('plug1');

  useEffect(async () => {
    const command = await get.getCommand(device);
    setCommand(command);
}, []);
  // useEffect (() => {
    
  //  console.log(get.getCommand(device));
    
  // }, [])
  const onSubmit = (data) => {
  const requestdata = requestOptions.rquest(data['command']);
  post.postCommand(requestdata);
  }
    // fetch('http://127.0.0.1:8000/api/language')
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result[0]['content']);
    //   }
    // );

  return (
    <div>
      <form style={{padding:'22px',width:'500px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label style={{color:'white', paddingBottom:'22px'}}>Command:</label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="command" value={command}></input>
        <br></br>
        <button style={{height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}}>Submit</button>
      </form>
      
    </div>
    

    
  );
}

export default CommandForm