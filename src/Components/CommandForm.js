import React, { useState } from 'react';
import {useForm} from 'react-hook-form';


const CommandForm = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form style={{padding:'22px',width:'500px', fontSize:'28px', display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
        <label style={{color:'white', paddingBottom:'22px'}}>Command:</label>
        <input style={{height:'50px', fontSize:'28px'}} ref={register} name="first plug"></input>
        <br></br>
        <button style={{height:'50px', backgroundColor:'#61dafb', fontSize:'28px'}}>Submit</button>
      </form>
      
    </div>
    

    
  );
}

export default CommandForm