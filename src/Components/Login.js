import React from 'react';
import {useForm} from 'react-hook-form';
import GetApi from './GetApi.js';
import {useHistory} from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const {register, handleSubmit} = useForm();
  const history = useHistory();
  
  const onSubmit = async (user) => {
    const authenticInfo = await GetApi.checkUserAccount(user);
    if(authenticInfo['status']){
      history.push(("/core"), authenticInfo);
    }
  }

  return (
    <div>
      <form style={{width:'250px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label className="LoginLabel">Username: </label>
        <input className="LoginInput" ref={register} name="username" defaultValue={''}></input>
        <label className="LoginLabel">Password: </label>
        <input className="LoginInput" ref={register} name="password" defaultValue={''}></input>
        <br></br>
        <button style={{height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm