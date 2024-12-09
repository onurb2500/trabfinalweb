import React, { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { fetchProducts } from "../database/products";

type CartItemProps = {
	id: number;
	quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart } = useShoppingCart();
	const [item, setItem] = useState<any | null>(null); // Usamos estado para armazenar o item
	const [loading, setLoading] = useState(true);

	// Carregar o produto do backend
	useEffect(() => {
		const getProduct = async () => {
			try {
				const products = await fetchProducts();
				const foundItem = products.find((i: any) => i.id === id);
				setItem(foundItem);
			} catch (error) {
				console.error("Erro ao buscar o produto:", error);
			} finally {
				setLoading(false);
			}
		};

		getProduct();
	}, [id]);

	if (loading) return <div>Carregando...</div>;
	if (item == null) return null;

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img
				src={item.imgUrl}
				alt={item.name}
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".75rem" }}>
					{formatCurrency(item.price)}
				</div>
			</div>
			<div>{formatCurrency(item.price * quantity)}</div>
			<Button
				variant="outline-danger"
				size="sm"
				onClick={() => removeFromCart(item.id)}
			>
				&times;
			</Button>
		</Stack>
	);
}
