import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }

            setLoading(false); // Garante que o carregamento termina
        };

        checkAuth();
    }, []);

    // Exibe uma mensagem enquanto verifica a autenticação
    if (loading) return <p>Carregando...</p>;

    // Redireciona para login se não estiver autenticado
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Renderiza os filhos se autenticado
    return children;
}
