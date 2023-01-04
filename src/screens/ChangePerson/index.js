import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import Button from '../../components/Button';
import Title from '../../components/Title';
import './styles.css';

function ChangePerson() {

  let navigate = useNavigate();

  const {id}=useParams();

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
    await axios.put(`http://localhost:8080/${id}`, user)
    navigate("/");
    alert("Pessoal alterada com sucesso.")
  }

  useEffect(()=>{
    loadUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get(`http://localhost:8080/${id}`);
    setUser(result.data)
  }

  return(
    <div>
      <form className='container' onSubmit={(e)=>onSubmit(e)}>
          <Title
            title={'Alterar Pessoa'}
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
            title={"Alterar"}
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

export default ChangePerson;