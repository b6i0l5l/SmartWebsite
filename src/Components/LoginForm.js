import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import GetApi from './GetApi.js';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const {register, handleSubmit} = useForm();
  const [states, setState] = useState({
    authentic:false,
    userName:''
  });

  const onSubmit = async (user) => {
    const authenticInfo = await GetApi.checkUserAccount(user);
  setState(states => ({
    ...states, 
    authentic: authenticInfo['success'],
    userName: authenticInfo['username']
  }));
  }

  const history = useHistory();
  const goToCore = () => {
    history.push("/core");
  }

  return (
    <div>
      <form style={{width:'250px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label style={{color:'white', paddingBottom:'22px',paddingTop:'22px'}}>Username: </label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="username" defaultValue={''}></input>
        <label style={{color:'white', paddingBottom:'22px',paddingTop:'22px'}}>Password: </label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="password" defaultValue={''}></input>
        <br></br>
        <button style={{height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}} onClick={goToCore}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm