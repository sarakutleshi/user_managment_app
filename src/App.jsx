import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserListing from "./UserListing";
import UserDetails from "./components/UserDetails.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserListing/>}/>
                <Route path="/users/:id" element={<UserDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;
