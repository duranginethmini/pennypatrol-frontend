import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUserFromStorage } from "../../utils/getUserFromStroage.ts";

interface AuthRouteProps {
    children: ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
    // Get the token
    const token = getUserFromStorage();

    return token ? children : <Navigate to="/login" />;
};

export default AuthRoute;
