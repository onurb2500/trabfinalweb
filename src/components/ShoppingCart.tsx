import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { fetchProducts } from "../database/products"; // Função para buscar os produtos

type ShoppingCartProps = {
	isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart, cartItems } = useShoppingCart();
	const [products, setProducts] = useState<any[]>([]); // Armazenar os produtos
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				const fetchedProducts = await fetchProducts(); // Buscar os produtos no backend
				setProducts(fetchedProducts);
			} catch (error) {
				console.error("Erro ao buscar os produtos:", error);
			} finally {
				setLoading(false);
			}
		};

		if (isOpen) {
			getProducts(); // Carregar os produtos quando o carrinho for aberto
		}
	}, [isOpen]);

	// Calcular o total
	const total = cartItems.reduce((total, cartItem) => {
		const item = products.find((i) => i.id === cartItem.id);
		return item ? total + item.price * cartItem.quantity : total;
	}, 0);

	return (
		<Offcanvas show={isOpen} placement="end" onHide={closeCart}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{loading ? (
					<div>Carregando...</div>
				) : (
					<Stack gap={3}>
						{cartItems.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
						<div className="ms-auto fw-bold fs-5">
							Total {formatCurrency(total)}
						</div>
					</Stack>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	);
}
