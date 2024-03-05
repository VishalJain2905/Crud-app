import React, { useState, useEffect } from "react";
import './user.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edituser = () => {
    const notify = () => toast("User Updated Successfully!");
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const { name, username, email, phone, website} = user;

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        // alert("You updated data successfully!"); // Display alert message after updating data
        setTimeout(() => navigate("/home"), 3000);
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    const onClose = () => {
        navigate("/home"); // Navigate to home page when close button is clicked
    };

    return (
        <>
            <div className="container-grid border shadow">
                <h1 className="text-center mb-4">Edit User</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="userName"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Email Address"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Phone Number"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Website Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1" 
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                   <div className="edit-buttons">
                    <button className="btn btn-warning m-2" onClick={notify}>Update User</button>
                    <ToastContainer />
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Edituser;

