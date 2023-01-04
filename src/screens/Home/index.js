import React, {useEffect, useState} from 'react';
import { MdMode, MdOutlineDelete } from "react-icons/md";

import { Link } from 'react-router-dom';
import axios from 'axios';

import Title from '../../components/Title';
import './styles.css';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result= await axios.get("http://localhost:8080/");
    setUsers(result.data);
    // setUsers(result.data.slice(0,10));
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/${id}`);
    loadUsers();
  }

  return(

    <div className='container'>
      <Title
        title={'Bootcamp - 26/12/2022'}
      />
      <table>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((users, index) =>(

            <tr>
              <th scope='row' key={index}>{index+1}</th>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>
                <Link
                  to={`/changeperson/${users.id}`}
                >
                  <MdMode/>
                </Link>

                <button
                  onClick={() => deleteUser(users.id)}
                >
                  <i><MdOutlineDelete/></i>
                </button>
                
              </td>
            </tr>
            ))
          }
        </tbody>       
      </table>
    </div>
  )
}

export default Home;