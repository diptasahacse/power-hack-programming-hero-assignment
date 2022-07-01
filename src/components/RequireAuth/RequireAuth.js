import React from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
const RequireAuth = ({ children }) => {
    let token = localStorage.getItem('accessToken');
    console.log(token)
    let location = useLocation();

    if (!token) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;