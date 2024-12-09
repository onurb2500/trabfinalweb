export async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:5000/products/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}
