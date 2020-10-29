import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import requestOptions from './RequestOptions';
import {Link ,useHistory } from "react-router-dom";
import post from './PostApi';
import { useLocation } from "react-router-dom";

const CommandForm = (props) => {
  const {register, handleSubmit} = useForm();
  let history = useHistory();
  
  const onSubmit = (newCommand) => {
  const requestdata = requestOptions.rquest(props['value']['device'],newCommand['command']);
  post.updateCommand(requestdata);
  }

  const location = useLocation();
  const goBackToCore = () =>{
    history.push('/core',location.state);
  }
  return (
    <div>
      <form style={{width:'500px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label style={{color:'white', paddingBottom:'22px',paddingTop:'22px'}}>Command: </label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="command" defaultValue={props['value']['command']}></input>
        <br></br>
        <div style={{display:'flex', flexDirection:'row'}}>
          <button style={{width:'250px', height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}} onClick={goBackToCore}>go back</button>
          <button style={{width:'250px', height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}}>submit</button>
        </div>
      </form>
    </div>
  );
}

export default CommandForm