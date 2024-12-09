import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { fetchProducts } from "../database/products"; 

export function Store() {
    const [storeItems, setStoreItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProducts();
                setStoreItems(products);
            } catch (err) {
                setError("Erro ao carregar os produtos.");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
