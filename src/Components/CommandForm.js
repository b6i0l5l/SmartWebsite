import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import requestOptions from './RequestOptions';
import {useHistory } from "react-router-dom";
import post from './PostApi';
import { useLocation } from "react-router-dom";
import './CommandForm.css';

const CommandForm = (props) => {
  const {register, handleSubmit} = useForm();
  let history = useHistory();
  
  const onSubmit = async (newCommand) => {
    const requestdata = requestOptions.rquest(props['value']['action'], newCommand['command']);
    await post.updateCommand(requestdata);
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
          <button className='CommandFormButton' onClick={goBackToCore}>go back</button>
          <button className='CommandFormButton'>submit</button>
        </div>
      </form>
    </div>
  );
}

export default CommandForm