import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserListing from "./components/UserListing.jsx";
import UserDetails from "./components/UserDetails.jsx";
import AddUser from "./components/AddUser.jsx";

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <UserListing users={users} isLoading={isLoading} error={error}/>}/>

                <Route path="/users/:id" element={<UserDetails users={users}/>}/>

                <Route path="/add-user"
                       element={<AddUser addUser={(user) => setUsers([user, ...users])}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
