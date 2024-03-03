import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import { Link, NavLink } from "react-router-dom";
import './user.css';

const User = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : "",
    })
  

    

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}` )
        setUser(result.data);
    }
    useEffect(()=>{
        loadUser()
    },[]);
    
  return (
    <>
    
  
  <Link classname="btn-back" to="/home">back to home</Link>
    
    <h1 className='display-4 '>User Id: {id}</h1>
    <ul className='list-group   list-group-item-success'>
        <li className='list-group-item'> <b>Name:</b>   {user.name}</li>
        <li className='list-group-item'> <b>Username:</b>  {user.username}</li>
        <li className='list-group-item'><b> Email: </b> {user.email}</li>
        <li className='list-group-item'><b>Phone:</b>  {user.phone}</li>
        <li className='list-group-item'><b>Website:</b>  {user.website}</li>
    </ul>

    
    </>
  )
}

export default User;