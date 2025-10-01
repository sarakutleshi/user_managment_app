import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function UserListing({users, isLoading, error}) {
    const navigate = useNavigate();

    if (isLoading)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="alert alert-danger text-center m-4">
                Error fetching data: {error.message}
            </div>
        );

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">User List</h1>
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-hover table-bordered align-middle">

                    <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-sm btn-primary"
                                        onClick={() => navigate(`/users/${user.id}`)}>Details
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>

                <div className="new-button mt-3">
                    <button className="btn btn-sm btn-primary" onClick={() => navigate("/add-user")}>
                        + Add User
                    </button>
                </div>

            </div>
        </div>
    );
}

export default UserListing;
