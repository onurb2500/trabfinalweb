import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Redireciona não-admins se `adminOnly` for verdadeiro
    if (adminOnly && user?.email !== "admin@macnica.com") {
        return <Navigate to="/home" />;
    }

    return children;
}
