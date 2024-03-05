import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex); 
  const npage = Math.ceil(users.length / recordsPerPage); 
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const notify = () => toast("User deleted Successfully!");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="heading">Homepage</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table">
            {records.length > 0 ? (
              records.map((user, index) => (
                <tr key={user.id}>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      className="btn btn-primary m-2"
                      to={`/Users/user/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-warning m-2"
                      to={`/Users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger m-2"
                      onClick={() => {
                        deleteUser(user.id);
                        notify();
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer /> {/* Moved ToastContainer outside the loop */}
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, index) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={index}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
