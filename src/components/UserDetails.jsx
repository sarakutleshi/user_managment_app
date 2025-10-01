import React, {use, useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '/src/styles/userdetails.css'

function UserDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) return <p className="text-center mt-5">Loading user details...</p>;

    return (
        <div className="container mt-5">
            <div className="card">
                <h2 className="mb-4">User Details</h2>

                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>UserName:</strong>{user.username}</p>
                <p><strong>Address: </strong>{user.address.street}.</p>
                <p><strong> City : </strong>
                    {user.address.city}</p>
                <p><strong>ZipCode: </strong> {user.address.zipcode}</p>
                <p><strong> Geo : </strong>
                    <strong> Lit:</strong> {user.address.geo.lat} ,
                    <strong> Lng:</strong> {user.address.geo.lng}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>

                <button
                    className="btn btn-secondary mt-3"
                    onClick={() => navigate("/")}
                >
                    ← Back to List
                </button>
            </div>
        </div>
    );
}

export default UserDetails;
