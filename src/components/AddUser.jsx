import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddUser({addUser}) {
    const [formData, setFormData] = useState({name: "", username: "", email: "",});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.username.trim()) newErrors.username = "Username is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        addUser({...formData, id: Date.now()});
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text" name="name" placeholder="Name"
                        value={formData.name} onChange={handleChange} className="form-control"/>{errors.name && (
                    <small className="text-danger">{errors.name}</small>)}
                </div>

                <div className="mb-3">
                    <input type="text" name="username" placeholder="Username"
                           value={formData.username} onChange={handleChange}
                           className="form-control"/>{errors.username &&
                    (<small className="text-danger">{errors.username}</small>)}</div>

                <div className="mb-3">
                    <input type="email" name="email" placeholder="Email" value={formData.email}
                           onChange={handleChange} className="form-control"/>
                    {errors.email && (<small className="text-danger">{errors.email}</small>)}
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
}

export default AddUser;
