import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';

const AppNavigator = () => {
    const getUserAuthStatus = () => {
        const token = localStorage.getItem('authToken');
        return !!token;
    };
    const isAuthenticated = getUserAuthStatus();

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Navigate to="/home" replace /> : <Login />
                    }
                />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppNavigator;
