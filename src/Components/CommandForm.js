import React from 'react';
import {useForm} from 'react-hook-form';
import requestOptions from './RequestOptions';
import post from './PostApi';
const CommandForm = (props) => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (newCommand) => {
  const requestdata = requestOptions.rquest(props['value']['device'],newCommand['command']);
  post.updateCommand(requestdata);
  }

  return (
    <div>
      <form style={{width:'500px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label style={{color:'white', paddingBottom:'22px',paddingTop:'22px'}}>Command: </label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="command" defaultValue={props['value']['command']}></input>
        <br></br>
        <button style={{height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}}>Submit</button>
      </form>
    </div>
  );
}

export default CommandForm