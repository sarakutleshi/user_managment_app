import React, {useState, useEffect} from "react";
import './App.css'

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

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
                    <tbody>{users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="button">
                                    <button className="btn btn-sm btn-danger" onClick={() => console.log("Delete user", user.id)}>
                                        <i className="bi bi-trash"></i> Details</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => console.log("Delete user", user.id)}>
                                        <i className="bi bi-trash"></i> Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => console.log("Delete user", user.id)}>
                                        <i className="bi bi-trash"></i> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;


