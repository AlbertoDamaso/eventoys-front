import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from '../../components/Button';
import Title from '../../components/Title';
import './styles.css';

function RegisterPerson() {

  let navigate = useNavigate();

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const{name, username,email}=user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user)
    navigate("/");
  }

  return(
    <div>
      <form className='container' onSubmit={(e)=>onSubmit(e)}>
          <Title
            title={'Incluir Pessoa'}
          />

        <input
          className='input'
          type={'text'}
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e)=>onInputChange(e)}
        />
        <input
          className='input'
          type={'text'}
          placeholder='Username'
          name='username'
          value={username}
          onChange={(e)=>onInputChange(e)}
        />
        <input
          className='input'
          type={'text'}
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e)=>onInputChange(e)}
        />      
        <div className='btn'>
          <Button
            title={"Cadastrar"}
            type="submit"
          />
          <Button
            title={"Cancelar"}
            onClick={() => navigate("/")}
          />   
        </div>             
      </form>
    </div>
  )
}

export default RegisterPerson;