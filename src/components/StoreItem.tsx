import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import React from "react";

import imgUrl from "/imgs/no-product.png";

type StoreItemProps = {
    _id: number;
    name: string;
    price: number;
    imgUrl: string;
};

export function StoreItem({ _id, name, price }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(_id)
    
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="flex-comumn">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() =>  increaseCartQuantity(_id)}>+ Add To Cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                            <Button onClick={() =>  decreaseCartQuantity(_id)}>-</Button>
                            <div>
                            <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button onClick={() =>  increaseCartQuantity(_id)}>+</Button>
                        </div>
                            <Button onClick={() =>  removeFromCart(_id)} variant="danger" size="sm">Remove</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    );
}
