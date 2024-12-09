const API_URL = "http://localhost:3000/api/products";

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erro ao carregar os produtos");
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
        throw error;
    }
};
