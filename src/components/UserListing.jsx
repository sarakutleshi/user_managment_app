import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../App.css';

function UserListing({users, isLoading, error}) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.slice()
        .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            const firstA = a.name[0].toLowerCase();
            const firstB = b.name[0].toLowerCase();
            return firstA > firstB ? 1 : firstA < firstB ? -1 : 0;
        });

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

            {/*Searching by name*/}
            <input
                type="text" className="form-control mb-3"
                placeholder="Search by name..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>

            <div className="table-responsive shadow-sm rounded">
                {/*Listing Users*/}
                <table id="tabel" className="table table-hover table-bordered align-middle">

                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {/*Sorting names by Alphabet*/}
                    <tbody>
                    {(() => {
                        if (filteredUsers.length > 0) {
                            return filteredUsers.map((user) => (
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
                                </tr>
                            ));
                        } else {
                            return (
                                <tr>
                                    <td colSpan="5" className="text-center">No users found</td>
                                </tr>
                            );
                        }
                    })()}
                    </tbody>
                </table>
            </div>
            {/*Add User Button*/}
            <div className="new-button mt-3">
                <button className="btn  btn-primary" onClick={() => navigate("/add-user")}>
                    + Add User
                </button>
            </div>
        </div>
    );
}

export default UserListing;
