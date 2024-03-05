import React, { useState } from "react";
import './user.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adduser = () => {

   const notify = () => toast("User Added Successfully!");

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : "",
    })
    
    const { name, username, email, phone, website} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3003/users", user);
        // toast.success("User added successfully"); 
        // alert("You added data successfully!"); // Display alert message after updating data
        setTimeout(() => navigate("/home"), 2500);
    }
  return (
    <>
    <div className="container-grid border shadow">
        <h1 className="text-center mb-4">Add User</h1>
        <form onSubmit={e => onSubmit(e)}>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="name"
          value={name}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="username"
          value={username}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Email Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="email"
          value={email}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Phone Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="phone"
         value={phone}
         onChange={e => onInputChange(e)}
        />
      </div>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Website Name"
          aria-label="Username"
          aria-describedby="basic-addon1" 
          name="website"
          value={website}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div>
     <button className="btn btn-primary" onClick={notify}>Add User</button>
     <ToastContainer />
     </div>
     </form>
      </div>
    </>
  );
};

export default Adduser;
